import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SumarComponent } from './sumar/sumar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SumarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  sumar(){+5;}
}
