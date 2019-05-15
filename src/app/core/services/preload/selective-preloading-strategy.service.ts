import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {

  public preloadedModules: string[] = [];
  public pushPath = '';

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      this.pushPath = route.path !== undefined  ?  route.path : '' ;
      this.preloadedModules.push(this.pushPath);
      return load();
    } else {
      return of(null);
    }
  }
}