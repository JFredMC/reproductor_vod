import { DeezerService } from './services/deezer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeezerService]
})
export class AppComponent {
  title = 'reproductor';

  constructor(){}
}
