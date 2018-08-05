import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sidebar} from '../models/Sidebar';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private http: HttpClient
  ) {
  }

  getSidebar() {
    return this.http.get<Sidebar>('http://localhost:3000/sidebar/edit-sidebar');
  }

  postSidebar(value) {
    return this.http.post('http://localhost:3000/sidebar/edit-sidebar', value);
  }
}
