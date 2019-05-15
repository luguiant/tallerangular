import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';

const routes: Routes = [
  {
    path: 'form1',
    component: FormOneComponent
  },
  {
    path: 'form2',
    component: FormTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }