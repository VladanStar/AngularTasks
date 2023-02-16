import { Component } from '@angular/core';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.css']
})
export class Student1Component {

  static readonly listaImena=["Mateja","Shopi","Aleksandar","Dragan","Cedomir","Dejan"]
  static readonly  listaPrezimena=["Popovic", "Sulejmanov","Rac","Vukasinovic","Tomcic","Kuzmanovic"]
    ime:string ="";
private menjanjeJeDozvoljeno:boolean=true;


    constructor(){

    }
unosJeOnemogucen():boolean{
return !this.menjanjeJeDozvoljeno;
}

onSacuvajInformacije():void{
this.menjanjeJeDozvoljeno=false;
}
onIzmeniIme(event: Event): void {
   this.ime = (<HTMLInputElement>event.target).value;
 }

}
