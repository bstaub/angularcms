import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {PagesComponent} from './components/pages/pages.component';


import {PageService} from './services/page.service';
import {Title} from '@angular/platform-browser';


const appRoutes: Routes = [
  {path: ':page', component: PagesComponent},
  {path: '', component: PagesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PageService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
