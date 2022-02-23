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
  private previousPageToken=undefined;
  private environment=environment;
  constructor(private httpClient: HttpClient) { }
  getHomeFeed =() => new Promise((resolve,reject) =>{
    this.httpClient.get(`${this.environment.url}videos?part=snippet&part=statistics&chart=mostPopular&maxResults=10&regionCode=IN&key=${this.environment.key}`)
    .toPromise()
    .then((response:any) => {
        this.nextPageToken=response.nextPageToken;
        console.log(response);
        
        resolve(response.items);
      })
      .catch((response:any) => reject(response.error.error.message));
    });

  getNextPageData = () => new Promise((resolve,reject) => {
    this.httpClient.get(`${this.environment.url}videos?part=snippet&part=statistics&chart=mostPopular&maxResults=10&regionCode=IN&pageToken=${this.nextPageToken}&key=${this.environment.key}`)
    .toPromise()
    .then((response:any) => {
        this.nextPageToken=response.nextPageToken;
        console.log(response);
        
        resolve(response.items);
      })
      .catch((response:any) => reject(response.error.error.message));
  })
}
