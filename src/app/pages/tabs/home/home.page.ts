import { Component, OnInit } from '@angular/core';
import { YTRequestService } from "src/app/_service/YT/yt-request.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private ytRequestService:YTRequestService) { }
  homeList;
  ngOnInit() {
    console.log("working");
    
    this.ytRequestService.getHomeFeed()
      .then((response:[]) => this.homeList = response)
      .catch((response:any) => console.log(response))
      .finally(() => console.log(this.homeList));
  }
  loadData(ev){
    console.log("Next:",ev);
    this.ytRequestService.getNextPageData()
    .then((response:[]) => {
      this.homeList = this.homeList.concat(response)
    })
    .catch((response:any) => console.log(response))
    .finally(() => console.log(this.homeList));
  }
  doRefresh(ev){
    console.log("refresh:",ev);
    
  }

}
