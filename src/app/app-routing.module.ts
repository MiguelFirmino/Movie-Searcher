import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ActorsListComponent } from './components/actors-list/actors-list.component';

const routes: Routes = [
  { path: 'movie', component: MoviesListComponent },
  { path: 'movie/:id', component: MoviesListComponent },
  { path: 'actor/:id', component: ActorsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
