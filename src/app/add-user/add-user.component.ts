import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addingUser: boolean = false;
  myForm: FormGroup;
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private router: Router) {
 
   }

 

  addUser = function () {
    this.addingUser = true;
    setTimeout(() => {
      this.router.navigate(['/listusers'])
    }, 2000);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', [
        Validators.required
        // Validators.email
      ]],
      body: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]],
      userId: ['', [
        Validators.required,
      ]],
    })

  }
  get title() {
    return this.myForm.get('title');
  }
  get body() {
    return this.myForm.get('body');
  }
  get userId() {
    return this.myForm.get('userId');
  }
  // this.myForm.valueChanges.subscribe()
  // submitHandler = function () {
  //   console.log("hjdhjh");
  // }

  submitHandler() {
    this.addingUser = true;
    // const formValue = this.myForm.value;
    // console.log(this.myForm.value)
  }

}
