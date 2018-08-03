import { Component, OnInit } from '@angular/core';
import {PageService} from '../../services/page.service';
import {Router} from '@angular/router';

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
  }

  addPage({form, value, valid}) {
    // debugger;
    form.reset();  // reset form after submission
    if (valid) {
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
