import { GenreApiDeezerResult } from './../../models/deezerGenres';
import { GetDeezerArtistResul } from 'src/app/models/deezerArtist';
import { DeezerService } from './../../services/deezer.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit { 
  // artist$: Observable<GetDeezerArtistResul[]>

  // constructor(deezer: DeezerService) {
  //   this.artist$ = deezer.getArtistDeezer()
  //   console.log(this.artist$)
  // }

  playMusic(): void {
    var contador=1;
        var audio = document.getElementsByTagName("audio")[0];
        audio.play();

        function control(){

            contador = contador+1
            if (contador%2==0){
                audio.pause();
            } else {
                audio.play();
            }
        }
  }

  ngOnInit(): void {
   
  } 
}

