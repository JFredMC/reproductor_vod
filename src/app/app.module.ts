import { DeezerService } from './services/deezer.service';
import { SpotifyService } from './services/spotify.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    SpotifyService,
    DeezerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router: Router ) { }
  ngOnInit(): void {
    var router = this.router.url
  }
}
