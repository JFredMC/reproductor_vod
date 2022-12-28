import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IgdbService {

  constructor(private http: HttpClient) { }

  GetIgdb()  {
    const url = 'https://api.igdb.com/v4/game'
    const client_id = '3q1qxsy4c5aqvejhrcmqmfyxja4q6b'
    const authorization = 'BEARER 2f7iu2f6rzx0q2a3gh9a4m21w06jvy'

    const headers = new HttpHeaders({
      client_id: client_id,
      Authorization: authorization
    })

    return this.http.post(url, {headers})
    .subscribe(todos =>{
      console.log(todos)
    })
  }
  
}
