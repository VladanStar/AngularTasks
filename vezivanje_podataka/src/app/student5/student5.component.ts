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
  dugmeJeUkljuceno:boolean =false;

  constructor(){
  setTimeout(()=>{this.dugmeJeUkljuceno=true;

  },2000)
  }

}
