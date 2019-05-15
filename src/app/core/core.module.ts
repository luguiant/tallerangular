import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationDirective } from './directives/validation.directive';
import { AveragePipe } from './pipes/average.pipe';

@NgModule({
  declarations: [
    ValidationDirective,
    AveragePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValidationDirective,
    AveragePipe
  ]
})
export class CoreModule { }
