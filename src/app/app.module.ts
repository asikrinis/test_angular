import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { View1Component } from './part1/view1/view1.component';
import { View1Service } from './part1/services/view1.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    View1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    View1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
