import { Component } from '@angular/core';

@Component({
  selector: 'app-student5',
  templateUrl: './student5.component.html',
  styleUrls: ['./student5.component.css']
})
export class Student5Component {
static readonly listaImena=["Mateja","Shopi","Aleksandar","Dragan","Cedomir","Dejan"]
static readonly  listaPrezimena=["Popovic", "Sulejmanov","Rac","Vukasinovic","Tomcic","Kuzmanovic"]
  ime:string ="";
  prezime:string="";
  inicijalizovanStudent: boolean = false;
  dugmeJeUkljuceno:boolean =false;

  constructor(){
  setTimeout(()=>{this.dugmeJeUkljuceno=true;

  },2000)
  }
onDohvatiInformacije():void{
if(this.inicijalizovanStudent){
return;
}
this.ime=Student5Component.listaImena[Math.floor(Math.random() * Student5Component.listaImena.length)];
this.prezime=Student5Component.listaPrezimena[Math.floor(Math.random() * Student5Component.listaPrezimena.length)];
this.inicijalizovanStudent=true
}

}
