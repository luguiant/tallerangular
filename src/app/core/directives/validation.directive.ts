import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { element } from 'protractor';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormService } from '../services/form/form.service';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective implements OnInit {
  
  private readonly element: HTMLIFrameElement;
  private abstractController: AbstractControl; 

  @Input() length = 50;
  @Input() group: FormGroup;
  @Input() valueMasked = '';
  @Input() errors: any;
  carret: any;
  allowedKeys: Array<number> = [8,9,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46]; 


  constructor(
    public formService: FormService,
    public ref: ElementRef
  ) {
    this.element = ref.nativeElement;
  }


  ngOnInit() {

    this.abstractController = this.group.controls[this.element.name];

  }

 
  validateAllowedKeys(event): boolean {
    let isAllowedKey = false;
    this.allowedKeys.forEach(value => {
        if (event.keyCode === value) {
            isAllowedKey = true;
        }
    });
    return isAllowedKey;
  }

  validateLength(event) {
    /*const length = event.target.value.replace(/[^0-9]/g, '').length;*/
    const length = event.target.value.length;
    if (length >= this.length) {
        event.preventDefault();
    }
  }

  validateBackspace(event) {
    if (event.keyCode === 8) {
        const deletedChar = event.target.value.substring(event.target.selectionStart - 1, event.target.selectionStart);
    }
  }

  @HostListener('keydown', ['$event']) validations(event: any) {

    if (!this.validateAllowedKeys(event)) {
      this.validateLength(event);
    } else {
      this.validateBackspace(event);
    }
  }

  @HostListener('keyup', ['$event']) ontextInput(event: any) {
    this.carret = event.target.selectionStart;
    this.valueMasked = event.target.value.replace(/[^0-9]/g, '');
    this.abstractController.setValue(this.valueMasked, { emitEvent: true });
    event.target.setSelectionRange(this.carret, this.carret);
  }

  @HostListener('textInput', ['$event']) textInput(event: any) {
    const data = event.data;
    event.keyCode = data.charCodeAt(0);
    event.key = data;
    this.validations(event);  
  }

  @HostListener('blur', ['$event']) validateServiceBlur(){
    this.errors = this.formService.validateForm(this.group, this.errors, true);
    console.log('blur',this.errors);
  }

  @HostListener('focus', ['$event']) validateServiceFocus(){
    this.errors = this.formService.validateForm(this.group, this.errors, true);
    console.log('focus', this.errors);
  }

  @HostListener('input', ['$event']) validateServiceInput(){
    this.errors = this.formService.validateForm(this.group, this.errors, true);
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }
}