import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student3Component } from './student3/student3.component';
import { StudentListaComponent } from './student-lista/student-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    Student3Component,
    StudentListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
