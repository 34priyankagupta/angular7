import { Component, OnInit, Input, ViewChild, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { BehaviourServiceService } from '../behaviour-service.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  @Input() tableDatasource: any;

  @Output() public deleteEmission = new EventEmitter();
  @Output() public updateEmission = new EventEmitter();

  reversedTable: any;
  showEditBox: boolean = false;
  IdReceived;
  dataToUpdate;
  phoneModel;
  mobileModel;
  emailModel;
  element;


  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'phone', 'mobile', 'email', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serv: BehaviourServiceService) { }

  showUpdateContactBox(i) {
    this.showEditBox = true;
    this.IdReceived = i.contactId;
  }

  updateContact(i) {
    this.showEditBox = false;
    this.element = {};
    this.dataToUpdate = {};
    this.dataToUpdate.contactId = i.contactId;
    this.dataToUpdate.contactPhone = this.element.contactPhone;
    this.dataToUpdate.contactMobile = this.element.contactMobile;
    this.dataToUpdate.contactEmail = this.element.contactEmail;
    this.updateEmission.emit(this.dataToUpdate);

  }

  deleteContact(i) {
    this.deleteEmission.emit(i);
  }

  ngOnInit() { }

  ngOnChanges(changeRecord: SimpleChanges) {
    this.tableDatasource = changeRecord.tableDatasource.currentValue;
    this.serv.dataAsItChanges(this.tableDatasource);
    if (this.tableDatasource !== undefined || null) {
      this.reversedTable = this.tableDatasource.sort(function (s, h) { return h.contactId - s.contactId; })
      this.dataSource = new MatTableDataSource(this.reversedTable);
      this.dataSource.paginator = this.paginator;
    }
  }
}
