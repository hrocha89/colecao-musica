import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as M from 'materialize-css';
import { Album } from '../../model/album';
import { WebStorageUtil } from '../../util/web-storage-util';
import { Key } from '../../util/key';
import { Artist } from '../../model/artist';
import { Genre } from '../../model/genre';
import { Select } from '../../model/select';


@Component({
  templateUrl: './albums-form.component.html'
})
export class AlbumsFormComponent implements OnInit, AfterViewInit {

  album!: Album;
  genres: Genre[];
  artists: Artist[];

  @ViewChild('selectArtist') selectArtist?: ElementRef;
  @ViewChild('selectGenre') selectGenre?: ElementRef;

  private readonly _albums!: Album[];

  constructor(private _activatedRoute: ActivatedRoute,
              private _route: Router) {
    this._albums = WebStorageUtil.get(Key.ALBUMS) as Album[];
    this.genres = WebStorageUtil.get(Key.GENRE) as Genre[];
    this.artists = WebStorageUtil.get(Key.ARTISTS) as Artist[];
  }

  ngOnInit() {

    let idParam = this._isEdit();

    if (idParam) {
      this.album = this._albums.find((album) => album.id === idParam)!;
    } else {
      const newId = this._albums.length + 1;

      this.album = new Album(newId, '', this.artists[0], 0, 'padrao.jpg', this.genres[0]);
    }

  }

  ngAfterViewInit() {
    M.FormSelect.init(this.selectArtist?.nativeElement);
    M.FormSelect.init(this.selectGenre?.nativeElement);
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

  compareFnSelect = (a: Select, b: Select) => {
    return a.id === b.id;
  }

  private _isEdit(): number {
    return +this._activatedRoute.snapshot.paramMap.get('id')! || 0;
  }

}
