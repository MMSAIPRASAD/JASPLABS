import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicsComponent } from './academics.component';

const routes: Routes = [{ path: 'academics',
component: AcademicsComponent 
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
