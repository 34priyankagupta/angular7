import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {
 
 
  displayedColumns: string[] = ['name', 'capital', 'region'];
  dataSource: MatTableDataSource<any>;
  dataReceivedInSubscribe: any;
  errMsg: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: MyserviceService) { }

  ngOnInit() {
    this.service.getContries().subscribe((data) => {
      this.dataReceivedInSubscribe = data; 
      this.dataSource = new MatTableDataSource(this.dataReceivedInSubscribe);
      this.dataSource.paginator = this.paginator;
    },
      err => this.errMsg = err);
      
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;
  // }
}