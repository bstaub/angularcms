import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private http: HttpClient
  ) { }

  getSidebar() {
    return this.http.get('http://localhost:3000/sidebar/edit-sidebar');
  }

  postSidebar(value) {
    return this.http.post('http://localhost:3000/sidebar/edit-sidebar', value);
  }
}
