import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PlayerComponent implements OnInit {
  
  @Input() relatedFeed;
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log(this.item);
  }
}
