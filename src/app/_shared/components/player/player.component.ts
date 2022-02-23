import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() profile;
  @Input() image;
  constructor() { }

  ngOnInit() {}

  ionViewDidEnter() {
    console.log(this.profile);
    console.log(this.image);
    
  }
}
