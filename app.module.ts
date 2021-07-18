import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentinfoModule } from './studentinfo/studentinfo.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcademicsModule } from './academics/academics.module';
import { TeacherinfoModule } from './teacherinfo/teacherinfo.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AccountsModule } from './accounts/accounts.module';
import { SchoolinfoModule } from './schoolinfo/schoolinfo.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ChartsModule } from 'ng2-charts';
import { RolebasedloginComponent } from './rolebasedlogin/rolebasedlogin.component';
import { AccountantloginComponent } from './accountantlogin/accountantlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RolebasedloginComponent,
    AccountantloginComponent,
    AdminloginComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule,NgxPaginationModule,ChartsModule,ReactiveFormsModule,FormsModule,
    AppRoutingModule,StudentinfoModule,AcademicsModule,TeacherinfoModule,AttendanceModule,AccountsModule,SchoolinfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
