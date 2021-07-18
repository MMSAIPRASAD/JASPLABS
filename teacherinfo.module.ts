import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherinfoRoutingModule } from './teacherinfo-routing.module';
import { TeacherinfoComponent } from './teacherinfo.component';


@NgModule({
  declarations: [TeacherinfoComponent],
  imports: [
    CommonModule,
    TeacherinfoRoutingModule
  ]
})
export class TeacherinfoModule { }
