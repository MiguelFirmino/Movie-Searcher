import { Component, OnInit } from '@angular/core';
import { MoviesPageService } from 'src/app/services/movies-page.service';
import { Movies } from 'src/app/models/Movies.model';
import { Genres } from 'src/app/models/Genres.model';

@Component({
  selector: 'app-movies-box',
  templateUrl: './movies-box.component.html',
  styleUrls: ['./movies-box.component.scss']
})
export class MoviesBoxComponent implements OnInit {
  constructor(private moviesService: MoviesPageService) {}

  moviesReceived: any = [];
  movieGenres: string[] = [];

  updateMovies = () => {
    this.moviesService
    .getFilteredMovies(undefined, "top_rated_250")
    .subscribe((data: Movies) => {
      let results = data.results;
      console.log(results);

      for (let result of results) {
        let newMovie = {
          name: result.titleText.text,
          image: result.primaryImage.url
        }

        this.moviesReceived = [...this.moviesReceived, newMovie];
      }
    });
  }

  ngOnInit() {
    this.moviesService
    .getFilteredMovies(undefined, 'top_rated_english_250')
    .subscribe((data: Movies) => {
      let results = data.results;
      console.log(results);

      for (let result of results) {
        let newMovie = {
          id: result.id,
          name: result.titleText.text,
          image: result.primaryImage.url,
          genre: result.genres.genres[0].text.toLocaleLowerCase()
        }

        this.moviesReceived = [...this.moviesReceived, newMovie];
      }
    });

    this.moviesService
    .getAllGenres()
    .subscribe((genres: Genres) => {
      this.movieGenres = genres.results;
    });
  }


}
