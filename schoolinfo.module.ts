import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolinfoRoutingModule } from './schoolinfo-routing.module';
import { SchoolinfoComponent } from './schoolinfo.component';


@NgModule({
  declarations: [SchoolinfoComponent],
  imports: [
    CommonModule,
    SchoolinfoRoutingModule
  ]
})
export class SchoolinfoModule { }
