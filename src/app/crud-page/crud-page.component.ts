import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css']
})
export class CrudPageComponent implements AfterContentInit {


  contactForm: FormGroup;
  @ViewChild('elmRef') elmRef: ElementRef;
  contactList: any;
  count = 0;
  contactObject: Object;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    /* Validating contact form */
    this.contactForm = this.formBuilder.group({
      phone: ['', [
        Validators.required
      ]],
      mobile: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    })

    /* Starting local storage database for CRUD */
    if (!!window.localStorage.getItem('contactList')) {
      this.contactList = JSON.parse(window.localStorage.getItem('contactList'));
    } else {
      this.contactList = [];
    }


    /* Giving some initial data for test purpose */
    if (this.contactList.length === 0) {
      this.contactObject = {
        contactId: 0,
        contactPhone: "+210-9876543210",
        contactMobile: "9099898787",
        contactEmail: "test@localstorage.db"
      }
      this.contactList.push(this.contactObject);
    }

  }


  get phone() {
    return this.contactForm.get('phone');
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }

  get email() {
    return this.contactForm.get('email');
  }

  addContacts() {
    if (this.contactForm.valid) {
      if (this.contactList.length !== 0) {
        this.count = Math.max.apply(Math, this.contactList.map(function (arr) {
          return arr.contactId;
        }));
        this.count++;
      }
      this.contactObject = {
        contactId: this.count,
        contactPhone: this.contactForm.value.phone,
        contactMobile: this.contactForm.value.mobile,
        contactEmail: this.contactForm.value.email
      }

      this.contactList.push(this.contactObject);
      window.localStorage.setItem('contactList', JSON.stringify(this.contactList));
      this.contactList = JSON.parse(window.localStorage.getItem('contactList'));
      this.contactForm.reset();
    }
  }
  clearAllContacts() {
    window.localStorage.removeItem('contactList');
    this.contactList = [];
    this.count = 0;
  }

  deleteDataForContact(data) {
    console.log("data", data)
    this.contactList.forEach((element, i) => {
      if (data.contactId === element.contactId) {
        console.log("element.contactId", element.contactId, i)
        this.contactList.splice(i, 1);
        window.localStorage.setItem('contactList', JSON.stringify(this.contactList));
        this.contactList = JSON.parse(window.localStorage.getItem('contactList'));
      }

    });
  }

  updateDataForContact(data) {
    this.contactList.forEach((element, i) => {
      if (data.contactId === element.contactId) {
        if(data.contactMobile !== undefined || null){
          element.contactMobile = data.contactMobile;
        }
        if(data.contactPhone !== undefined || null){
          element.contactPhone = data.contactPhone;
        }
        if(data.contactEmail !== undefined || null){
          element.contactEmail = data.contactEmail;
        }
      }
    })
    window.localStorage.setItem('contactList', JSON.stringify(this.contactList));
  }

  ngAfterContentInit(): void {
    this.elmRef.nativeElement.focus();
  }
}


