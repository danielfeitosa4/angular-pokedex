import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from '../types/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons:Pokemon [] = []

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons()
  }

  async carregarPokemons() {
    const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise()

    this.pokemons = requisicao.results
  }
}
