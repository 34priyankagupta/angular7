import { Component, OnInit, ViewChild } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { UserinfoComponent } from '../userinfo/userinfo.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  dataSource1: MatTableDataSource<any>;
  displayedColumns1: string[] = ["id", "title", "userId"];
  error: any;
  selectedRowIndex: number = -1;
  data: any;
  dataReceive: any;

  constructor(private myservice: MyserviceService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.myservice.getUsers().subscribe(
      (res) => {
        this.dataReceive = res;
        this.dataSource1 = new MatTableDataSource<any>(res);
        this.dataSource1.paginator = this.paginator;
      }
    )
  }
  ngAfterViewInit() {
    // this.dataSource1.paginator = this.paginator;
  }
  getRecord = function (clickedData) {
    this.selectedRowIndex = clickedData.id;
    const dialogRef = this.dialog.open(UserinfoComponent, {
      width: '30%',
      data: clickedData
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

}
