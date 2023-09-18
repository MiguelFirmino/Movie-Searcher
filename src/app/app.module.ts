import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorsListComponent } from './components/actors-list/actors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    ActorsListComponent
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
