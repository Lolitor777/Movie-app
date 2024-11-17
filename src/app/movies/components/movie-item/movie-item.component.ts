import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../interfaces/movies.interfaces';

@Component({
  selector: 'movies-movie-item',
  templateUrl: './movie-item.component.html',
})
export class MovieItemComponent {

  constructor( private MoviesService: MoviesService ) {}

  public srcImage: string = 'https://image.tmdb.org/t/p/w500'

  get pagination():number | undefined {
    return this.MoviesService.pagination;
  }

  get search():string {
    return this.MoviesService.search;
  }

  get movieList(): Movies[] {
    return this.MoviesService.movieList;
  }

}
