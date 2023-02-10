import { Component, Input} from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
// providers: [PokemonService];
})
export class PokemonComponent {
@Input() pokemon:string ="";

}
