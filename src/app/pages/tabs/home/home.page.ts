import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ToastController,IonRouterOutlet } from '@ionic/angular';
import { PixabayService } from 'src/app/_service/pixabay/pixabay.service';
import { PlayerComponent } from "src/app/_shared/components/player/player.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss','../header.scss'],
  encapsulation:ViewEncapsulation.None

})
export class HomePage implements OnInit {

  constructor(
      private toastController:ToastController
    , private pixabayService:PixabayService
    ) { }
  homeList=[];
  ngOnInit() {
    this.loadData();
  }
  loadData(ev?){
    this.pixabayService.LoadData()
      .then((response:any) =>{
        this.homeList = this.homeList.concat(response);
      });
    if(ev){
      ev.target.complete();
    }
  }
  selectedItem=undefined;
  presentPlayerModule(index){
    this.selectedItem = this.homeList[index];
    console.log(this.selectedItem);
    
  }
  resetSelection(){
    // Close Model by reseting *selectedItem*
    this.selectedItem = undefined;
  }
}
