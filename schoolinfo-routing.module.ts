import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolinfoComponent } from './schoolinfo.component';

const routes: Routes = [{ path: 'staffcount', component: SchoolinfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolinfoRoutingModule { }
