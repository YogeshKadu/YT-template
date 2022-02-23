import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YTRequestService {
  private nextPageToken=undefined;
  // private previousPageToken=undefined;
  private environment=environment;
  constructor(private httpClient: HttpClient) { }
  getHomeFeed =() => new Promise((resolve,reject) =>{
    this.httpClient.get(`${this.environment.url}videos?part=snippet&chart=mostPopular&maxResults=10&type=video&regionCode=US&key=${this.environment.key}`)
    .toPromise()
    .then((response:any) => {
      if(response.nextPageToken){
        this.nextPageToken=response.nextPageToken;
        console.log(response);
        resolve(response.items);
      }else{
        reject("End of pages");
      }
      })
      .catch((response:any) => {
        console.log(response);
        reject(response.error.error.message)
      });
    });

  getNextPageData = () => new Promise((resolve,reject) => {
    this.httpClient.get(`${this.environment.url}videos?part=snippet&chart=mostPopular&maxResults=10&type=video&regionCode=US&pageToken=${this.nextPageToken}&key=${this.environment.key}`)
    .toPromise()
    .then((response:any) => {
        this.nextPageToken=response.nextPageToken;
        console.log(response);
        resolve(response.items);
      })
      .catch((response:any) => {
        console.log(response);
        reject(response.error.error.message)
      });
  })
}
