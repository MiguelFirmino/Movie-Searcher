import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movies.model';
import { Genres } from '../models/Genres.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesPageService {
  constructor(private http: HttpClient) {}

  getRandomMovie(): Observable<Movies> {
    let url = 'https://moviesdatabase.p.rapidapi.com/titles/random';

    return this.http.get<Movies>(url, {
      params: {
        limit: 1,
        list: 'most_pop_movies',
        info: 'custom_info' // info: "principalCast, base_info, principalCast, extendedCast"
      },
      headers: {
        'X-RapidAPI-Key': '7357ce177emshc27a9ee256a72a7p17201fjsn6fbab4980f57',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    });
  }

  getFilteredMovies(genreToSearch?: string, listToSearch?: string): Observable<Movies> {
    let url = 'https://moviesdatabase.p.rapidapi.com/titles/';

    let requestParams: any = {
      limit: 10,
      info: 'custom_info',
      startYear: 1940,
      endYear: 2023
    }
    genreToSearch ? requestParams.genre = genreToSearch : undefined
    listToSearch ? requestParams.list = listToSearch : undefined

    return this.http.get<Movies>(url, {
      params: requestParams,
      headers: {
        'X-RapidAPI-Key': '7357ce177emshc27a9ee256a72a7p17201fjsn6fbab4980f57',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    })
  }

  getMovieById(id: string): Observable<Movies> {
    let url = 'https://moviesdatabase.p.rapidapi.com/titles/';

    return this.http.get<Movies>(url, {
      params: {
        id: id,
        info: 'custom_info'
      },
      headers: {
        'X-RapidAPI-Key': '7357ce177emshc27a9ee256a72a7p17201fjsn6fbab4980f57',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    })
  }

  getAllGenres(): Observable<Genres> {
    let url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres';

    return this.http.get<Genres>(url, {
      headers: {
        'X-RapidAPI-Key': '7357ce177emshc27a9ee256a72a7p17201fjsn6fbab4980f57',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    })
  }
}
