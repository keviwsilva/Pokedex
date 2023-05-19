import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Pokemon, getPokemonImage, getPokemonNumber} from 'src/_model/pokemon';
import { PokemonService } from "../../_services/pokemon.service";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  // pokeForm!: FormGroup;
  // submittingForm: boolean = false;

  // constructor(
  //   private pokemonService = PokemonService,
  // ){
  //   private pokeNumber() {
  //     const 
  //   }

  // }

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}


