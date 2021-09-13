import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Screen6Component } from './screen6/screen6.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    CarouselComponent,
    Screen6Component
  ],
  imports: [
   [NgbPaginationModule, NgbAlertModule],
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
