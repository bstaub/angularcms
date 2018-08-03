import { Injectable } from '@angular/core';
// import {Http} from '@angular/http';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  register(user) {
    return this.http.post('http://localhost:3000/users/register', user);
  }

  login(login) {
    return this.http.post('http://localhost:3000/users/login', login);
  }



}


