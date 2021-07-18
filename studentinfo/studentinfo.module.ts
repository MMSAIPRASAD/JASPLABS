import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentinfoRoutingModule } from './studentinfo-routing.module';
import { StudentinfoComponent } from './studentinfo.component';
import { StrengthlistComponent } from './strengthlist/strengthlist.component';
import { ChartsModule } from 'ng2-charts';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { TeacherdataComponent } from './teacherdata/teacherdata.component';
import { NonteacherdataComponent } from './nonteacherdata/nonteacherdata.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentinfoComponent, StrengthlistComponent, FilterPipe, TeacherdataComponent, NonteacherdataComponent, StudentdataComponent],
  imports: [
    CommonModule,FormsModule,
    StudentinfoRoutingModule,ReactiveFormsModule,ChartsModule,NgxPaginationModule
  ]
})
export class StudentinfoModule { }
