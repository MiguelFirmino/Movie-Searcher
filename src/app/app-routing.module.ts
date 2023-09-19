import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { ActorsPageComponent } from './components/actors-page/actors-page.component';
import { MoviesBoxComponent } from './components/movies-box/movies-box.component';

const routes: Routes = [
  { path: 'home', component: MoviesBoxComponent },
  { path: 'movie', component: MoviesPageComponent },
  { path: 'movie/:id', component: MoviesPageComponent },
  { path: 'actor/:id', component: ActorsPageComponent },
  { path: '', component: MoviesBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
