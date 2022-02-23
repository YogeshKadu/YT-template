import { Component, OnInit } from '@angular/core';

import { environment } from "src/environments/environment";
@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  environment=environment;

}
