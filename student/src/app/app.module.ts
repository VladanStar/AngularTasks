import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student1Component } from './student1/student1.component';
import { Student1ListComponent } from './student1-list/student1-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Student1Component,
    Student1ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
