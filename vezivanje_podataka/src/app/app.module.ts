import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student3Component } from './student3/student3.component';
import { StudentListaComponent } from './student-lista/student-lista.component';
import { Student4Component } from './student4/student4.component';
import { Student4ListaComponent } from './student4-lista/student4-lista.component';
import { Student5Component } from './student5/student5.component';
import { Student5ListaComponent } from './student5-lista/student5-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    Student3Component,
    StudentListaComponent,
    Student4Component,
    Student4ListaComponent,
    Student5Component,
    Student5ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
