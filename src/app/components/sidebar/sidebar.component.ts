import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  list = [
    {
      number: '2',
      name: 'Musica',
      route: 'music',
      icon: 'fa-solid fa-music'
    },
    {
      number: '3',
      name: 'Peliculas',
      route: 'movies',
      icon: 'fa-solid fa-film'
    },
    {
      number: '4',
      name: 'Mapa',
      route: 'map',
      icon: 'fa-solid fa-map'
    },
    {
      number: '5',
      name: 'Sitios de interés',
      route: 'sites',
      icon: 'fa-solid fa-location-dot'
    },
    {
      number: '6',
      name: 'Juegos',
      route: 'games',
      icon: 'fa-solid fa-gamepad'
    },
    {
      number: '7',
      name: 'Quienes Somos',
      route: 'about',
      icon: 'fa-solid fa-building'
    },
  ];

  constructor() { }
  ngOnInit(): void {
  }
  
}
