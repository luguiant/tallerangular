import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Pipe({name: 'average'})
export class AveragePipe implements PipeTransform{
    transform(score: FormGroup){
       return (
            ((+score.value.scoreOne) +
            (+score.value.scoreTwo) + 
            (+score.value.scoreTree) + 
            (+score.value.scoreFour) )/ 4);
    }
}