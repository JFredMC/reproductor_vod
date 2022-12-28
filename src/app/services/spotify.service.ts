import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3fC85nFWJTT3-c56cs90h-xviCPBXlFMCP7WUU0830XFiAzn80Vks9_t4l9fNSqrAQiD5Xp4o7BlU2Da4jEwqFCNdnV1p-AKyZNmg-uojSCcjLKJhuIslJxyOBsYuCWJJphuIA9dGIeiuZSA_3njntKEUz1XWNTrxkCwcL_4ylvL5PwVblvORLyoyWJOeFG0'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .subscribe( data => {
      console.log(data)
    })
  }
}
