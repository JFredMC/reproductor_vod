import { GetCardsClashRoyal, GetCardsClashRoyalResul } from './../models/royal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoyalService {
  constructor(private http: HttpClient) { }

  GetCardsClashRoyal(): Observable<GetCardsClashRoyalResul[]> {
    const url = 'https://api.clashroyale.com/v1/cards'
    const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE5NTkyNTE2LTc3NjQtNDkwNi04ZWI5LTFmZWMzYzI2NjE1MSIsImlhdCI6MTY3MjA5MDI4OSwic3ViIjoiZGV2ZWxvcGVyL2VlNjdkYmZjLWQ3OTEtZjBhYy02YjBlLWJiZGJiNDI1MDBlZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTEuOTUuMTUxLjEzMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ft3jsou08xLQzE8IvkqcrX-bs0ESXu968XlsuCjgnwsmVZo0bv-OqGkRgboR3El0FxA6pZW2QCxwdem3MxMtsQ'
    const headers = new HttpHeaders({
      'Authorization': `BEARER ${API_KEY}`
    })
    return this.http.get<GetCardsClashRoyal>(url, {headers})
    .pipe(map((apiResult: { items: any; }) => apiResult.items))
  }
}
