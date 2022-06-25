import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../model/album';
import { WebStorageUtil } from '../../util/web-storage-util';
import { Key } from '../../util/key';
import { Artist } from '../../model/artist';
import { Genre } from '../../model/enum/genre';

@Component({
  templateUrl: './albums-form.component.html'
})
export class AlbumsFormComponent implements OnInit {

  album!: Album;
  private readonly _albums!: Album[];

  constructor(private _activatedRoute: ActivatedRoute,
              private _route: Router) {
    this._albums = WebStorageUtil.get(Key.ALBUMS) as Album[];
  }

  ngOnInit() {

    let idParam = this._isEdit();

    if (idParam) {
      this.album = this._albums.find((album) => album.id === idParam)!;
    } else {
      const newId = this._albums.length + 1;
      const artists = WebStorageUtil.get(Key.ARTISTS) as Artist[];

      this.album = new Album(newId, '', artists[0], new Date().getFullYear(), 'padrao.jpg', Genre.ROCK)
    }

  }

  saveAlbum() {

    if (this._isEdit()) {
      let albumEdit = this._albums.find(album => album.id === this._isEdit())!;
      let indexOf = this._albums.indexOf(albumEdit);

      this._albums.splice(indexOf, 1)
    }

    this._albums.push(this.album);
    this._albums.sort((a, b) => a.id - b.id)

    WebStorageUtil.set(Key.ALBUMS, this._albums);

    this._route.navigateByUrl('albums');
  }

  private _isEdit(): number {
    return +this._activatedRoute.snapshot.paramMap.get('id')! || 0;
  }

}
