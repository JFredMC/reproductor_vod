import { SitesComponent } from './components/sites/sites.component';
import { AboutComponent } from './components/about/about.component';
import { GamesComponent } from './components/games/games.component';
import { MapComponent } from './components/map/map.component';
import { MusicComponent } from './components/music/music.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'music', component: MusicComponent},
  {path: 'artist', component: MusicComponent},
  {path: 'map', component: MapComponent},
  {path: 'sites', component: SitesComponent},
  {path: 'games', component: GamesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'action', component: MoviesComponent},
  {path: 'anime', component: MoviesComponent},
  {path: 'documentaries', component: MoviesComponent},
  {path: 'terror', component: MoviesComponent},
  {path: 'suspense', component: MoviesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
