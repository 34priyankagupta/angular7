import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  opened: boolean = false;
  showProgressBar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.showProgressBar = true;
      }
      else if (routerEvent instanceof NavigationEnd) {
        this.showProgressBar = false;
      }
    })
  }

  ngOnInit() {
  }


}
