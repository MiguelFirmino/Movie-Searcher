import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { ActorsPageComponent } from './components/actors-page/actors-page.component';
import { MoviesBoxComponent } from './components/movies-box/movies-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesPageComponent,
    ActorsPageComponent,
    MoviesBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
