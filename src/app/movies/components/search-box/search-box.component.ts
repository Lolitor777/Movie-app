import { Component, ElementRef, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movies-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  constructor( private MoviesServices: MoviesService){}

  @ViewChild('txtTagInput')
  public searchValue!: ElementRef<HTMLInputElement>;

  search():void {

    if(this.searchValue.nativeElement.value.length < 2 ) return;

    this.MoviesServices.fetchMovies( this.searchValue.nativeElement.value );

    this.searchValue.nativeElement.value = '';
  }
}
