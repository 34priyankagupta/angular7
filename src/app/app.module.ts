import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

/* Angular material ones */
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { UserinfoComponent } from './userinfo/userinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptorService } from './auth-interceptor.service';
import { HeaderComponent } from './header/header.component';

import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { GraphStatsComponent } from './graph-stats/graph-stats.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { PieGraphStatsComponent } from './pie-graph-stats/pie-graph-stats.component';
import { CrudPageComponent } from './crud-page/crud-page.component';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { InfoContactComponent } from './info-contact/info-contact.component';
import { MatTreeModule } from '@angular/material/tree';
import { PlayTreeComponent } from './play-tree/play-tree.component';

import { MatIconModule } from '@angular/material/icon';
import { BehvSubjectComponent } from './behv-subject/behv-subject.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserinfoComponent,
    HeaderComponent,
    GraphStatsComponent,
    UserStatsComponent,
    PieGraphStatsComponent,
    CrudPageComponent,
    ContactTableComponent,
    InfoContactComponent,
    PlayTreeComponent,
    BehvSubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatRippleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NvD3Module,
    MatTreeModule,
    MatIconModule
  ],
  exports: [UserinfoComponent],
  entryComponents: [UserinfoComponent],
  providers: [
    // AuthInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
