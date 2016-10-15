import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WjInputModule} from "wijmo/wijmo.angular2.input";
import {WjGridModule} from "wijmo/wijmo.angular2.grid";
import {DataSvc} from "./services/DataSvc";
import {WjGridFilterModule} from "wijmo/wijmo.angular2.grid.filter";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WjInputModule,
    WjGridModule,
    WjGridFilterModule
  ],
  providers: [DataSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
