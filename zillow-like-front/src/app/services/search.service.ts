import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search$:Subject<string> = new Subject<string>()

  getSearch$(){
    return this.search$.asObservable()
  }

  setSearch(string:string){
    this.search$.next(string)
  }
}
