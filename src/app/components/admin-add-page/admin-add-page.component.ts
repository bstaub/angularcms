import { Component, OnInit } from '@angular/core';
import {PageService} from '../../services/page.service';
import {Router} from '@angular/router';

// add jQuery Example, also see addClass in ngOnInit
// declare var $: any;
declare var CKEDITOR: any;



@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.css']
})
export class AdminAddPageComponent implements OnInit {

  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  public title: string;
  public content: string;

  constructor(
    private pageService: PageService,
    private router: Router
  ) { }

  ngOnInit() {
    // add security, redirect to home if its not the admin! Test: copy url http://localhost:4200/admin/add-page when logged out
    if (localStorage.getItem('user') !== '\"admin\"') {
      this.router.navigateByUrl('');
    }

    // test jQuery
    // $('body').addClass('brunoquerytest');
    // activate Editor!
    CKEDITOR.replace('content');
  }

  addPage({form, value, valid}) {
    // debugger;  //get value content from CKEDITOR instance, otherwise the value is undefined, see below!
    // https://cdn.ckeditor.com/ is added manually, not via npm, gave error!
    form.reset();  // reset form after submission
    if (valid) {
      value.content = CKEDITOR.instances.content.getData();
      this.pageService.postAddPage(value).subscribe(res => {
        if (res === 'pageExists') {
          this.errorMsg = true;
          setTimeout(function () {
            this.errorMsg = false;
          }.bind(this), 2000);
        } else {
          this.successMsg = true;
          setTimeout(function () {
            this.successMsg = false;
          }.bind(this), 2000);

          // Clear field from CKEDITOR, if success, form reset() works just with other fields!
          CKEDITOR.instances.content.setData('');

          // update Page Navigation directly
          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          });
        }
      });

    } else {
      console.log('Das Form ist ungültig not valid');
    }


  }

}
