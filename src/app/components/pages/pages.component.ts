import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../services/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  private param: any;
  public pageBody: any;
  public pages: any;


  constructor(private route: ActivatedRoute, private router: Router, private pageService: PageService) {

  }

  ngOnInit() {
    this.pageService.getPages().subscribe(pages => {
      this.pages = pages;
    });

    this.route.params.subscribe(params => {
      this.param = params['page'];
      if (this.param === undefined ) {
        this.param = 'home';
      }

      this.pageService.getPage(this.param).subscribe(pageBody => {
        if (pageBody == null) {  // user goes to page that dos not exist
          this.router.navigateByUrl('');
        }
        this.pageBody = pageBody;
      });

    });
  }

}
