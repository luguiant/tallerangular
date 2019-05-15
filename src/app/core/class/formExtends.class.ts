import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form/form.service';


export class FormExtends{

    public myForm: FormGroup;
    public averageValue: number;
    public show = false;

    public formErrors = {
        name: '',
        dni: '',
        scoreOne: '',
        scoreTwo: '',
        scoreTree: '',
        scoreFour: ''
      };

    constructor(
        public form: FormBuilder,
        public formService: FormService,
    ) { }

    public getMyForm(): FormGroup {
        return this.myForm;
    }

    public createFrom(): void{
        this.myForm = this.form.group({
          name: ['', [
              Validators.required, 
              Validators.minLength(4), 
              Validators.maxLength(50)]
            ],
          dni: ['', [
            Validators.required,
            Validators.minLength(7), 
            Validators.maxLength(15)]
          ],
          scoreOne: ['', [
            Validators.required,
            Validators.maxLength(1)
           ]
          ],
          scoreTwo: ['', [
            Validators.required,
            Validators.maxLength(1)
           ]
          ],
          scoreTree: ['', [
            Validators.required,
            Validators.maxLength(1)
           ]
          ],
          scoreFour: ['', [
            Validators.required,
            Validators.maxLength(1)
           ]
          ]
        });

        this.suscribeForm();
    }

    public suscribeForm(){
      this.myForm.valueChanges.subscribe((data) => {
        this.formErrors = this.formService.validateForm(this.myForm, this.formErrors, true);
      });
    }
}