import { GenreApiDeezer, GenreApiDeezerResult } from './../models/deezerGenres';
import { GetDeezerArtist, GetDeezerArtistResul } from '../models/deezerArtist';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private http: HttpClient) {}
  
  getArtistDeezer(): Observable<GetDeezerArtistResul[]> {
    const url = 'https://api.deezer.com/artist/10583405'
      return this.http.get<GetDeezerArtist>(`${url}`)
      .pipe(map(apiResult => apiResult.data))
  }
}
