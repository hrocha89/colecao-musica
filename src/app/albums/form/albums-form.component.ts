import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { ActivatedRoute } from '@angular/router';
import { WebStorageUtil } from '../../util/web-storage-util';
import { Key } from '../../util/key';
import { Artist } from '../../model/artist';
import { Genre } from '../../model/enum/genre';

@Component({
  templateUrl: './albums-form.component.html'
})
export class AlbumsFormComponent implements OnInit {

  album!: Album;

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    let idParam = this._isEdit();
    const albums = WebStorageUtil.get(Key.ALBUMS) as Album[];


    if (idParam) {
      this.album = albums.find((album) => album.id === idParam)!;
    } else {
      const newId = albums.length + 1;
      const artists = WebStorageUtil.get(Key.ARTISTS) as Artist[];

      this.album = new Album(newId, '', artists[0], new Date().getFullYear(), '', Genre.ROCK)
    }

  }

  saveAlbum() {

    if (this._isEdit()) {

      const albums = WebStorageUtil.get(Key.ALBUMS) as Album[];


    }

  }

  private _isEdit(): number {
    return +this._activatedRoute.snapshot.paramMap.get('id')! || 0;
  }

  // editInfoAlbum(idAlbum: number) {
  //   this.showForm = true;
  //
  //   this.albumEdit = this.albums.find(a => a.id === idAlbum) || this._newAlbum();
  // }
  //
  // saveAlbum() {
  //   this.showForm = false;
  //
  //   if (this.albumEdit && this.albumEdit.id) {
  //
  //     const remove = this.albums.find(a => a.id === this.albumEdit.id) || this._newAlbum();
  //
  //     if (remove.id) {
  //       this.albums.slice(remove.id - 1, 1);
  //     }
  //   }
  //
  // }


}
