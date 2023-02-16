import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from './student/student.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student2Component } from './student2/student2.component';
import { StudentListaComponent } from './student-lista/student-lista.component';
import { Student3Component } from './student3/student3.component';
import { Student3ListaComponent } from './student3-lista/student3-lista.component';

@NgModule({
  declarations: [AppComponent, StudentComponent, Student2Component, StudentListaComponent, Student3Component, Student3ListaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
