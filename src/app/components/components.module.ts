import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';
import { MapComponent } from './map/map.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { SitesComponent } from './sites/sites.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContentComponent,
    GamesComponent,
    MapComponent,
    MoviesComponent,
    MusicComponent,
    SidebarComponent,
    SitesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutComponent,
    ContentComponent,
    GamesComponent,
    MapComponent,
    MoviesComponent,
    MusicComponent,
    SidebarComponent,
    SitesComponent
  ]
})
export class ComponentsModule { }
