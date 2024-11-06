import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BurguerMenuComponent } from './components/burguer-menu/burguer-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsBurguerMenuComponent } from './components/burguer-menu/components/buttons-burguer-menu/buttons-burguer-menu.component';



@NgModule({
  declarations: [
    SideBarComponent,
    BurguerMenuComponent,
    ButtonsBurguerMenuComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SideBarComponent,
    BurguerMenuComponent
  ]
})
export class SharedModule { }
