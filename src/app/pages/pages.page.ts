import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(private platform:Platform,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.platform.ready().then(() => this.router.navigate(['tabs'],{relativeTo:this.activatedRoute}));
  }

}
