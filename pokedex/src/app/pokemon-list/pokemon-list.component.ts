import { Component} from '@angular/core';
import { PokemonService } from 'src/_services/pokemon.service';
import { Pokemon } from '../../_model/pokemon';
import { Type } from '../../_model/type'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [];

  constructor(
    public pokemonService: PokemonService,
  ){
  }

}

