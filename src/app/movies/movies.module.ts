import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MatIconModule } from '@angular/material/icon';
import { MovieItemComponent } from './components/movie-item/movie-item.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    MovieItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class MoviesModule { }
