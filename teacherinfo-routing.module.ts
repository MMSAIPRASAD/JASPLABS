import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherinfoComponent } from './teacherinfo.component';

const routes: Routes = [{ path: '', component: TeacherinfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherinfoRoutingModule { }
