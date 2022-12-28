import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  genders = [
    {
    number: '1',
    route: 'action'
    },
    {
      number: '2',
      route: 'anime'
    },
    {
      number: '3',
      route: 'documentaries'
    },
    {
      number: '4',
      route: 'terror'
    },
    {
      number: '5',
      route: 'suspense'
    }
  ]
}
