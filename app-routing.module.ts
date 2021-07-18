import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherinfoComponent } from './teacherinfo/teacherinfo.component';
import { AcademicsComponent } from './academics/academics.component';
import { RolebasedloginComponent } from './rolebasedlogin/rolebasedlogin.component';
import { AccountantloginComponent } from './accountantlogin/accountantlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  { path: 'teachercount',
  component: TeacherinfoComponent 
 },
 {path:'',pathMatch:"full",component:RolebasedloginComponent},
 {path:'login',component:AdminloginComponent},
 {path:'loginaccountant',component:AccountantloginComponent},



 

  { path: 'studentslist', loadChildren: () => import('./studentinfo/studentinfo.module').then(m => m.StudentinfoModule) }, 
  { path: 'schoollist', loadChildren: () => import('./schoolinfo/schoolinfo.module').then(m => m.SchoolinfoModule) }, 
  { path: 'teacherlist', loadChildren: () => import('./teacherinfo/teacherinfo.module').then(m => m.TeacherinfoModule) }, 
  { path: 'academiclist', loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule) }, 
  { path: 'accountlist', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) }, 
  { path: 'accountlist', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
