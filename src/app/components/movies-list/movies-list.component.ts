import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/models/Movies.model';
import { MoviesListService } from 'src/app/services/movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  constructor(
    private moviesListService: MoviesListService,
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

  ngOnInit(): void {
    this.moviesListService.getRandomMovie().subscribe((data: Movies) => {
      console.log(data);
      let movie = data.results[0];
      this.movieId = movie.id;
      this.movieTitle = movie.titleText.text;
      this.averageRating = movie.ratingsSummary.aggregateRating;
      this.numVotes = movie.ratingsSummary.voteCount;

      let credits = movie.principalCast[0].credits;

      for (let { characters, name } of credits) {
        this.mainActors.push({
          role: characters[0].name,
          actorName: name.nameText.text,
          id: name.id
        });
      }

      this.releaseYear = movie.releaseYear?.year;
    });
  }
}
