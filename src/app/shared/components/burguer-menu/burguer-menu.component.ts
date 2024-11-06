import { Component } from '@angular/core';
import { BurguerMenuService } from './services/burguer-menu.service';

@Component({
  selector: 'shared-burguer-menu',
  templateUrl: './burguer-menu.component.html',
  styleUrl: './burguer-menu.component.css',
})
export class BurguerMenuComponent {

  constructor( private toggleMenuService: BurguerMenuService ){}

  get toggleMenu():boolean {
    return this.toggleMenuService.toggleMenu;
  }

  onSetToggleMenu():void{
    this.toggleMenuService.setToggleMenu()
  }

}
