import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { BurguerMenuService } from '../../services/burguer-menu.service';

@Component({
  selector: 'shared-buttons-burguer-menu',
  templateUrl: './buttons-burguer-menu.component.html',
})
export class ButtonsBurguerMenuComponent {

  constructor( private toggleMenuService: BurguerMenuService ) {}

  buttonCloseMenu() {
    this.toggleMenuService.setToggleMenu()
  }

}
