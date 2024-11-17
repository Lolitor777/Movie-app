import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies, SearchResponse } from '../interfaces/movies.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) {}

  private _movieList: Movies[] = [];
  private _pagination?: number;
  private _search: string = '';

  private url: string = 'https://api.themoviedb.org/3/search/movie?query='

  get pagination(){
    return this._pagination;
  }

  get search() {
    return this._search;
  }

  get movieList() {
    return this._movieList;
  }


  fetchMovies( value: string ) {

    value.toLocaleLowerCase()

    this._search = value;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGU2M2ZkYWQxZDM3Y2VlZmFjMzU2YzI5MzBjNWM4OCIsIm5iZiI6MTczMTM0OTM0NC44OTcxMjE0LCJzdWIiOiI2NzMyMjdkZGJjM2ZmN2I0ZDFiZWY1ZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.c8cK5fGl7oO7LvKRUPWI6KaV5Cd84Ipc79yT0Tipj0g'
      }
    };

    this.http.get<SearchResponse>(`${ this.url }${ value }&language=es-MX`, options)
      .subscribe(
        ( res ) => {
          this._movieList = res.results;
          this._pagination = res.total_pages;
          console.log( this._pagination );
        }
      )
  }
}
