import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MoviesPageService } from 'src/app/services/movies-page.service';
import { Movies } from 'src/app/models/Movies.model';
import { Genres } from 'src/app/models/Genres.model';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-movies-box',
  templateUrl: './movies-box.component.html',
  styleUrls: ['./movies-box.component.scss']
})
export class MoviesBoxComponent implements OnInit {

  constructor(private moviesService: MoviesPageService) {}

  moviesReceived: any = [];
  movieGenres: string[] = [];
  moviesPage: number = 1;
  listViewWidth: number = 0;
  listViewHeight: number = 0;

  requestMovies = (genre?: string, list?: string, page?: number): void => {
    this.moviesService
    .getFilteredMovies(genre, list, this.moviesPage)
    .subscribe((data: Movies) => {
      let results = data.results;
      console.log(results);

      for (let result of results) {
        let newMovie = {
          id: result.id,
          name: result.titleText.text,
          image: result.primaryImage.url,
          genre: result.genres.genres[0].text.toLocaleLowerCase()
        };

        this.moviesReceived = [...this.moviesReceived, newMovie];
      }
    });

    this.moviesPage += 1;
  }

  resetMovies = (): void => {
    this.moviesPage = 1;

    this.requestMovies();
  }

  ngOnInit(): void {
    this.requestMovies(undefined, undefined, 1);

    // getting all genres
    this.moviesService
    .getAllGenres()
    .subscribe((genres: Genres) => {
      this.movieGenres = genres.results;
      this.movieGenres.splice(0, 1);
    });
  }

  // ngAfterViewInit(): void {
  //   console.log(this.moviesList.nativeElement);
  // }
  //@ViewChild('moviesList') moviesList!: ElementRef;
}
