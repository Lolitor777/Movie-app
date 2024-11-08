import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent
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
