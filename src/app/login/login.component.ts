import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Logindata } from '../logindata';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterContentInit {

  loginForm: FormGroup;
  logining: boolean = false;
  loginData: Logindata
  @ViewChild('nameRef') nameElementRef: ElementRef;

  constructor(private formBuilder: FormBuilder, private serv: MyserviceService,
    private logn: AuthServiceService, private route: Router) { }

  login() {
    this.logining = true;
    this.loginData = this.loginForm.value;
    this.logn.loginService(this.loginData).subscribe((res) => {
      this.logining = false;
      console.log(res.token);
      sessionStorage.setItem('token', res.token);
      this.route.navigate(['/statistics']);
    }, (err) => {
      this.logining = false;
      console.log(err);
    });
  }

  ngOnInit() {
    this.logn.loggedOut();
    this.loginForm = this.formBuilder.group({
      password: ['', [
        Validators.required
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]],
      email: ['eve.holt@reqres.in', [
        Validators.required,
        Validators.email
      ]],
    })


  }
  get password() {
    return this.loginForm.get('password');
  }
  get username() {
    return this.loginForm.get('username');
  }
  get email() {
    return this.loginForm.get('email');
  }

  // ngAfterViewInit

  ngAfterContentInit(): void {
    // console.log("this.nameElementRef.nativeElement", this.nameElementRef.nativeElement)
    this.nameElementRef.nativeElement.focus();
  }


}


