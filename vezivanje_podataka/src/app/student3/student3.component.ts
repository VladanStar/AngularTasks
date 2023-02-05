import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student3',
  templateUrl: './student3.component.html',
  styleUrls: ['./student3.component.css'],
})
export class Student3Component implements OnInit {
  static brojac: number = 1;
  redniBroj: number =1;
  jmbg: string = "";

  constructor() {
    this.redniBroj =Student3Component.brojac;
 ++Student3Component.brojac;
  }
  ngOnInit(): void {}
}
