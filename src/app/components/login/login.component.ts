import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFailed: boolean = false;
  public userRegistred: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    if (localStorage.getItem('userRegistred')) {
      this.userRegistred = true;
      localStorage.removeItem('userRegistred');
    }
  }

  login({value, valid}) {
    if (valid) {
      this.userService.login(value).subscribe(res => {
        if (res === 'invalidLogin') {
          this.loginFailed = true;
          setTimeout(function () {
            this.loginFailed = false;
          }.bind(this), 2000);  // damit this.userExist auf die Klasse bindet, wird durch setTimeout Execution ja verhindert, binden wir .bind(this)
        } else {
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigateByUrl('');  // if user logged in, he will redirected to homepage
        }
      });

    } else {
      console.log('Das Form ist ungültig not valid');
    }
  }

}
