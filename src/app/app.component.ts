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
      new Album(1, 'Kind of Blue', this._getArtistsById(1), 1959, 'kind-of-blue.jpg', this._getGenreById(1))
    ]
  }

  private _createArtists(): Artist[] {
    return [
      new Artist(1, 'Miles Davis')
    ]
  }

  private _getArtistsById(id: number): Artist {
    const artists = WebStorageUtil.get(Key.ARTISTS) as Artist[];
    return artists.find(a => a.id === id) || this._createArtists()[0];
  }

  private _createGenre(): Genre[] {
    return [
      new Genre(1, 'Jazz')
    ]
  }

  private _getGenreById(id: number): Genre {
    const genres = WebStorageUtil.get(Key.GENRE) as Genre[];
    return genres.find(g => g.id === id)!;
  }

}
