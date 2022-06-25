import { Component, OnInit } from '@angular/core';
import { Album } from './model/album';
import { Artist } from './model/artist';
import { Menu } from './model/interface/menu';
import { WebStorageUtil } from './util/web-storage-util';
import { Key } from './util/key';
import { Genre } from './model/genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu!: Menu[];

  constructor() {
    WebStorageUtil.set(Key.MENU, this._createMenu());
    WebStorageUtil.set(Key.ARTISTS, this._createArtists());
    WebStorageUtil.set(Key.GENRE, this._createGenre());
    WebStorageUtil.set(Key.ALBUMS, this._createAlbums());
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

  private _createAlbums(): Album[] {
    return [
      new Album(1, 'Kind of Blue', this._getArtistsById(1), 1959, 'kind-of-blue.jpg', this._getGenreById(1)),
      new Album(2, 'Dark side of the moon', this._getArtistsById(2), 1973, 'dark-moon.jpg', this._getGenreById(2)),
      new Album(3, 'Maiden Voyage', this._getArtistsById(3), 1965, 'maiden-voyage.jpg', this._getGenreById(1)),
      new Album(4, 'Tom & Elis', this._getArtistsById(4), 1974, 'elis-tom.jpg', this._getGenreById(3)),
      new Album(5, 'Volume 3', this._getArtistsById(5), 2016, 'trio-corrente.jpg', this._getGenreById(1)),
    ]
  }

  private _createArtists(): Artist[] {
    return [
      new Artist(1, 'Miles Davis'),
      new Artist(2, 'Pink Floyd'),
      new Artist(3, 'Herbie Hancock'),
      new Artist(4, 'Tom Jobim'),
      new Artist(5, 'Trio Corrente'),
    ]
  }

  private _getArtistsById(id: number): Artist {
    const artists = WebStorageUtil.get(Key.ARTISTS) as Artist[];
    return artists.find(a => a.id === id) || this._createArtists()[0];
  }

  private _createGenre(): Genre[] {
    return [
      new Genre(1, 'Jazz'),
      new Genre(2, 'Rock'),
      new Genre(3, 'MPB'),
      new Genre(4, 'Soul'),
      new Genre(5, 'Clássico'),
    ]
  }

  private _getGenreById(id: number): Genre {
    const genres = WebStorageUtil.get(Key.GENRE) as Genre[];
    return genres.find(g => g.id === id)!;
  }

}
