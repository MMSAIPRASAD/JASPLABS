import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentinfoComponent } from './studentinfo.component';
import { StrengthlistComponent } from './strengthlist/strengthlist.component';

const routes: Routes = [
  
  { path: 'studentcount',
   component: StrengthlistComponent 
  },
  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentinfoRoutingModule { }
