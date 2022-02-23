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
  profiles;
  images;
  async ngOnInit() {
    // this.ytRequestService.getHomeFeed()
    //   .then((response:[]) => this.homeList = response)
    //   .catch((response:any) => console.log(response))
    //   .finally(() => console.log(this.homeList));
    await this.ytRequestService.getProfile()
      .then((response:any) => {
        this.profiles = response.results;
        console.log(response)
      })
      .catch((response) => console.warn(response));
      await this.ytRequestService.getImage()
      .then((response:any) => {
        this.images = response;
        console.log(response)
      })
      .catch((response) => console.warn(response));
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
    // this.ytRequestService.getNextPageData()
    // .then((response:[]) => {
    //   this.homeList = this.homeList.concat(response)
    // })
    // .catch((response:any) => {
    //   this.presentToast(response);
    // })
    // .finally(() => {
    //   ev.target.complete();
    //   console.log(this.homeList)
    // });
  }
  doRefresh(ev){
    console.log("refresh:",ev);
  }
  
  async presentPlayerModule(index){
    const modal = await this.modalController.create({
      component: PlayerComponent,
      swipeToClose: true,
      componentProps:{profile:this.profiles[index],image:this.images[index]}
    });
    return await modal.present();
  }

}
