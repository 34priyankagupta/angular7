import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLoginItems: boolean = false;
  data: boolean;

  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit() {

  }

  checkLogin =  () => {
    return this.auth.loggedIn();
  }


  logout = function () {
    this.auth.loggedOut();
    this.showLoginItems = false;
  }

}
