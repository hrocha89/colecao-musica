import { Component, OnInit } from '@angular/core';
import { Album } from './model/album';
import { Artist } from './model/artist';
import { Menu } from './model/interface/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showForm: boolean = false;

  albumEdit: Album = this._newAlbum();

  albums: Album[] = [];
  menu: Menu[];

  constructor() {
    this.menu = this._getMenu();
  }

  ngOnInit() {
    this.albums = this._getAlbums();
  }

  editInfoAlbum(idAlbum: number) {
    this.showForm = true;

    this.albumEdit = this.albums.find(a => a.id === idAlbum) || this._newAlbum();
  }

  saveAlbum() {
    this.showForm = false;

    if (this.albumEdit && this.albumEdit.id) {

      const remove = this.albums.find(a => a.id === this.albumEdit.id) || this._newAlbum();

      if (remove.id) {
        this.albums.slice(remove.id - 1, 1);
      }
    }

  }

  back() {
    this.showForm = false;
  }

  private _getMenu(): Menu[] {
    return [
      {id: 1, link: 'albums', name: 'Albums'},
      {id: 2, link: 'artists', name: 'Artistas'},
      {id: 3, link: 'favorites', name: 'Favoritos'},
    ]
  }

  private _getAlbums(): Album[] {
    return [
      new Album(1, 'Kind of Blue', new Artist(1, 'Miles Davis'), 1959, 'kind-of-blue.jpg'),
      new Album(2, 'Volume 3', new Artist(2, 'Trio Corrente'), 2016, 'trio-corrente.jpg'),
      new Album(3, 'Maiden Voyage', new Artist(3, 'Herbie Hancock'), 1965, 'maiden-voyage.jpg')
    ]
  }

  private _newAlbum() {
    return new Album(0, '', new Artist(0, ''), 0, '');
  }

}
