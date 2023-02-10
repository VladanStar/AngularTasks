import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

pokemoniList:Array<string>=["Mateja Popovic","Shopi Sulejmanov","Aleksandar Rac","Dragan Vukasinovic","Cedomir Tomcic",
 "Dejan Kuzmanovic","Nenad Rosevic","Stefan Cvijic","Ivan Trailovic","Ognjen Bjekic","Dario Vojnic"];

constructor(){

}

}
