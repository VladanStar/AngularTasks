import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  private static readonly listaImena: string[] = [
    'Mateja',
    'Shopi',
    'Aleksandar',
    'Dragan',
    'Cedomir',
    'Dejan',
  ];

  private static readonly brojImena: number =
    StudentComponent.listaImena.length;

  private ocene: number[] = [];
  public ime: string = '';
  public ocenaStr: string = null;
  // public broj:number=StudentComponent.brojImena;

  constructor() {
    this.ime =
      StudentComponent.listaImena[
        Math.floor(Math.random() * StudentComponent.brojImena)
      ];
  }

  prosek(): number {
    if (this.ocene.length === 0) {
      return 0.0;
    }
    return this.ocene.reduce((prev, next) => prev + next) / this.ocene.length;
  }

  onDodajOcenu(): void {
    if (Number.isNaN(Number.parseInt(this.ocenaStr))) {
      this.ocenaStr = null;
      return;
    }

    const ocenaNum: number = Number.parseInt(this.ocenaStr);
    if (ocenaNum < 5 || ocenaNum > 10) {
      this.ocenaStr = null;
      return;
    }

    this.ocene.push(ocenaNum);
    this.ocenaStr = null;
  }
}
