import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actors } from '../models/Actors';

@Injectable({
  providedIn: 'root'
})
export class ActorsListService {

  constructor(private http: HttpClient) { }

  getActorById(id: string): Observable<Actors> {
    let url = `https://moviesdatabase.p.rapidapi.com/actors/${id}`;

    return this.http.get<Actors>(url, {
      headers: {
        'X-RapidAPI-Key': '7357ce177emshc27a9ee256a72a7p17201fjsn6fbab4980f57',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    });
  }
}
