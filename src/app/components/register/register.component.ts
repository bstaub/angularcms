import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userExists: boolean = false;

  constructor(private userService: UserService,
              private router: Router
  ) {
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigateByUrl('');
    }
  }

  /*  // value and valid return true or false, you can check it like this
  register(f) {
    console.log(f);
  }
  */


  register({value, valid}) {
    if (valid) {
      this.userService.register(value).subscribe(res => {
        if (res === 'userExists') {
          this.userExists = true;
          setTimeout(function () {
            this.userExists = false;
          }.bind(this), 2000);  // damit this.userExist auf die Klasse bindet, wird durch setTimeout Execution ja verhindert, binden wir .bind(this)
        } else {
          localStorage.setItem('userRegistered', 'true');
          this.router.navigateByUrl('login');
        }
      });

    } else {
      console.log('Das Form ist ungültig not valid');
    }
  }


}
