import { Component } from '@angular/core';

@Component({
  selector: 'app-student6',
  templateUrl: './student6.component.html',
  styleUrls: ['./student6.component.css']
})
export class Student6Component {
  static readonly listaImena=["Mateja","Shopi","Aleksandar","Dragan","Cedomir","Dejan"]
  static readonly  listaPrezimena=["Popovic", "Sulejmanov","Rac","Vukasinovic","Tomcic","Kuzmanovic"]
    ime:string ="";
private menjanjeJeDozvoljeno:boolean=true;


    constructor(){

    }
unosJeOnemogucen():boolean{
return!this.menjanjeJeDozvoljeno;
}

onSacuvajInformacije():void{
this.menjanjeJeDozvoljeno=false;
}

}
