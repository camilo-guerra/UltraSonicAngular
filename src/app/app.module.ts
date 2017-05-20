import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {UbidotsService} from './ubidots.service'

import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule,HttpModule,FormsModule],
  declarations: [AppComponent],
  providers: [UbidotsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
