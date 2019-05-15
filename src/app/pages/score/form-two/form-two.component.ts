import { Component, OnInit } from '@angular/core';
import { FormExtends } from '../../../core/class/formExtends.class';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../../core/services/form/form.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss'],
  providers:[
    FormService
  ]
})
export class FormTwoComponent extends FormExtends implements OnInit {

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
    if(this.myForm.valid){
      this.show = true;
    }
  }
}
