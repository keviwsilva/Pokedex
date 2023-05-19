import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../_services/pokemon.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
