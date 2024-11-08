import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurguerMenuService {

  public toggleMenu: boolean = false;

  setToggleMenu():void {
    this.toggleMenu = !this.toggleMenu;
  }

}
