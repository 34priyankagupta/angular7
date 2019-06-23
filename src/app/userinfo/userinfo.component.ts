import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(
    private myserv: MyserviceService,
    public dialogRef: MatDialogRef<UserinfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }


  onNoClick(): void {

    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
