import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'movies-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public searchValue!: ElementRef<HTMLInputElement>;

  search():void {
    console.log( this.searchValue.nativeElement.value );

    this.searchValue.nativeElement.value = '';
  }

}
