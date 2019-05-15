import { Component, OnInit } from '@angular/core';
import { FormExtends } from '../../../core/class/formExtends.class';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../../core/services/form/form.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss'],
  providers:[
    FormService
  ]
})
export class FormOneComponent extends FormExtends implements OnInit {

  constructor(
    public form: FormBuilder,
    public formService: FormService,
  ) { 
    super(form, formService);
  }

  ngOnInit() {
    this.createFrom();
  }

  average() {
    this.show = false;
    this.averageValue = 0;
    if(this.myForm.valid){
      this.averageValue = (
                  ((+this.myForm.value.scoreOne) +
                  (+this.myForm.value.scoreTwo) + 
                  (+this.myForm.value.scoreTree) + 
                  (+this.myForm.value.scoreFour) )/ 4);
      this.show = true;
    }
  }
  

}
