import { Component, OnInit } from '@angular/core';
import {PageService} from '../../services/page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {

  pages: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;


  constructor(
    private router: Router,
    private pagesServcie: PageService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('user') !== '\"admin\"') {
      this.router.navigateByUrl('');  // wenn nicht admin zur Homepage leiten
    }

    this.pages = this.pagesServcie.pagesBS;
  }

}
