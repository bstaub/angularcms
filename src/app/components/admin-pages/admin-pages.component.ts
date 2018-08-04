import {Component, OnInit} from '@angular/core';
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
    private pageServcie: PageService
  ) {
  }

  ngOnInit() {
    if (localStorage.getItem('user') !== '\"admin\"') {
      this.router.navigateByUrl('');  // wenn nicht admin zur Homepage leiten
    }

    this.pages = this.pageServcie.pagesBS;
  }

  deletePage(id) {
    if (confirm('Wollen Sie diese Seite wirklich löschen?')) {
      this.pageServcie.deletePage(id).subscribe(res => {
        if (res === 'error') {
          this.errorMsg = true;
          setTimeout(function () {
            this.errorMsg = false;
          }.bind(this), 2000);
        } else {
          this.successMsg = true;
          setTimeout(function () {
            this.successMsg = false;
          }.bind(this), 2000);

          this.pageServcie.getPages().subscribe(pages => {
            this.pageServcie.pagesBS.next(pages);
          });
        }
      });
    }
  }

}
