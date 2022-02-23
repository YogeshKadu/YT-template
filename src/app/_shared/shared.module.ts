import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from "./components/player/player.component";
import { IonicModule } from '@ionic/angular';


const components=[
    PlayerComponent
]
@NgModule({
  declarations: [components],
  imports: [
      CommonModule
    , IonicModule
  ],
  exports:[components]
})
export class SharedModule { }
