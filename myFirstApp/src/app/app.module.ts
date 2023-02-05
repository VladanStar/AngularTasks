import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from './student/student.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student2Component } from './student2/student2.component';

@NgModule({
  declarations: [AppComponent, StudentComponent, Student2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
