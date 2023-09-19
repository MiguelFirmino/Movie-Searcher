import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent {
  constructor(
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params) => {
      this.movieId = params['id'];
    });
  }

  movieId: string = '';
  movieTitle: string = '';
  averageRating: number = 0;
  numVotes: number = 0;
  mainActors: { role: string; actorName: string, id: string }[] = [];
  releaseYear: number = 2020;
}
