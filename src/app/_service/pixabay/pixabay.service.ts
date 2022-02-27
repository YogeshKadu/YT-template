import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  constructor(
      private HttpClient:HttpClient
  ) { }
  private pageno=1;
  LoadData = () => new Promise((resolve,reject) =>{
    this.HttpClient.get(`${environment.url}?key=${environment.key}&orientation=horizontal&category=science&per_page=30&image_type=illustration&page=${this.pageno}`)
      .toPromise()
      .then((response:any) => {
        this.pageno++;
        console.log(response);
        resolve(response.hits)
      })
      .catch((error) =>{
        console.log(error);
        reject(error);
      })
  }); 
}
// &category=backgrounds