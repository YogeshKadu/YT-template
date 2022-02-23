import { Component, OnInit } from '@angular/core';

import { IonRouterOutlet, ModalController, ToastController } from '@ionic/angular';

import { YTRequestService } from "src/app/_service/YT/yt-request.service";
import { PlayerComponent } from "src/app/_shared/components/player/player.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss','../header.scss'],
})
export class HomePage implements OnInit {

  constructor(
      private ytRequestService:YTRequestService
    , private toastController:ToastController
    , private routerOutlet: IonRouterOutlet
    , private modalController: ModalController
    ) { }
  homeList;
  ngOnInit() {
    // console.log(this.routerOutlet.component.routerOutlet.nativeEl);
    // this.routerOutl/et.
    this.ytRequestService.getHomeFeed()
      .then((response:[]) => this.homeList = response)
      .catch((response:any) => console.log(response))
      .finally(() => console.log(this.homeList));
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  loadData(ev){
    console.log("Next:",ev);
    this.ytRequestService.getNextPageData()
    .then((response:[]) => {
      this.homeList = this.homeList.concat(response)
    })
    .catch((response:any) => {
      this.presentToast(response);
    })
    .finally(() => {
      ev.target.complete();
      console.log(this.homeList)
    });
  }
  doRefresh(ev){
    console.log("refresh:",ev);
  }
  
  async presentPlayerModule(){
    const modal = await this.modalController.create({
      component: PlayerComponent,
      swipeToClose: true,
      componentProps:{},
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

}
