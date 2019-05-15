import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class JsonplaceholderService {

  constructor(
    public http: HttpClient
  ) { }

  getData():  Observable<HttpResponse<any>> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/');
  }
}
