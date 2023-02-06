import { Component } from '@angular/core';

@Component({
  selector: 'app-student4',
  templateUrl: './student4.component.html',
  styleUrls: ['./student4.component.css']
})
export class Student4Component {
ime:string ="";
prezime:string="";
dugmeJeUkljuceno:boolean =false;

constructor(){
setTimeout(()=>{this.dugmeJeUkljuceno=true;

},2000)
}

}
