import { Injectable } from '@angular/core';
// import {Http} from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PageService {

  // constructor(private http: Http) { }
  constructor(private http: HttpClient) { }


  // public pagesBS = new BehaviorSubject<string>(null);
  public pagesBS = new BehaviorSubject<Object>(null);

  getPages() {
    return this.http.get('http://localhost:3000/pages');
  }

  getPage(slug) {
    return this.http.get('http://localhost:3000/pages/' + slug);
  }
}
