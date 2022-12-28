import { CharacterApi, CharacterApiResult } from './../models/characters';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor(private http: HttpClient) { }

  getCharacterApi(): Observable<CharacterApiResult[]>{
    return this.http.get<CharacterApi>('https://rickandmortyapi.com/api/character')
    .pipe(map(apiResult => apiResult.results))
    
  }

}


