import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LocaltwoComponent } from './localtwo/localtwo.component';
import { CallsComponent } from './calls/calls.component';
import { UserComponent } from './calls/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LocaltwoComponent,
    CallsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
