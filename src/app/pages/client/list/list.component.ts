import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../../core/services/jsonplaceholder/jsonplaceholder.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [JsonplaceholderService]
})
export class ListComponent implements OnInit {
  public myForm: FormGroup;
  public list: any;
  public itemToSearch = '';
  public listCopy: any;

  constructor(
    public listService: JsonplaceholderService,
    public form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchFrom();
    this.getList();
  }

  getList(): void {
    this.listService.getData().subscribe(
      response => {
         this.list = response;
         this.listCopy = response;
      },
      error => {

      }
    );
  }

  public searchFrom(): void{
    this.myForm = this.form.group({
      search: ['', [
          Validators.required
         ] ]    });
  }

  filterList(): void{
    if(this.myForm.value.search.length === 0 || this.myForm.valid === false ){
      this.list = this.listCopy;
    } else {
      this.list = this.list.filter(
        (item: any) => {
          return item.title.toLowerCase().includes(this.myForm.value.search.toLowerCase())
        }
      );
    }
  }
}
