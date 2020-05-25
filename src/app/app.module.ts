import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AddressCompoent} from './address.compoent'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,AddressCompoent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
