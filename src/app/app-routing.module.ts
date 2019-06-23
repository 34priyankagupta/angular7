import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { LoginComponent } from './login/login.component';
import { StatisticGraphComponent } from './statistic-graph/statistic-graph.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { UserResolverService } from './user-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CountryResolverService } from './country-resolver.service';
import { CrudPageComponent } from './crud-page/crud-page.component';


const routes: Routes = [
  { path: 'listusers', component: ListUserComponent, canActivate: [AuthGuardGuard], resolve: { userlist: UserResolverService } },
  { path: 'addusers', component: AddUserComponent, canActivate: [AuthGuardGuard] },
  { path: 'updateusers', component: UpdateUserComponent, canActivate: [AuthGuardGuard] },
  { path: 'allcountries', component: SmartTableComponent, canActivate: [AuthGuardGuard], resolve: {countryList: CountryResolverService}},
  { path: 'statistics', component: StatisticGraphComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'contactpage', component: CrudPageComponent, canActivate: [AuthGuardGuard] },

  /* When user puts empty or not-recognizable element in url */
  { path: '', redirectTo: '/statistics', pathMatch: 'full' },
  { path: '**', redirectTo: '/statistics' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListUserComponent, AddUserComponent, UpdateUserComponent,
  SmartTableComponent, StatisticGraphComponent, LoginComponent, ErrorPageComponent];
