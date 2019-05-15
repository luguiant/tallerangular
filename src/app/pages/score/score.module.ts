import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { ScoreRoutingModule } from './score-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationDirective } from '../../core/directives/validation.directive';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [FormOneComponent, FormTwoComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    ScoreRoutingModule
  ]
})
export class ScoreModule { }
