import { Component, OnInit } from '@angular/core';
import { Menu } from './model/interface/menu';
import { WebStorageUtil } from './util/web-storage-util';
import { Key } from './util/key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu!: Menu[];

  constructor() {
    WebStorageUtil.set(Key.MENU, this._createMenu());
  }

  ngOnInit() {
    this.menu = WebStorageUtil.get(Key.MENU);
  }

  private _createMenu(): Menu[] {
    return [
      {id: 1, link: 'albums', name: 'Albums'},
      {id: 2, link: 'artists', name: 'Artistas'},
      {id: 3, link: 'favorites', name: 'Favoritos'},
    ]
  }

}
