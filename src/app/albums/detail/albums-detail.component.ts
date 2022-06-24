import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorageUtil } from '../../util/web-storage-util';
import { Key } from '../../util/key';
import { Location } from '@angular/common';

@Component({
  templateUrl: './albums-detail.component.html'
})
export class AlbumsDetailComponent implements OnInit {

  album!: Album

  constructor(private _route: Router,
              private _activatedRoute: ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit() {

    let idParam = +this._activatedRoute.snapshot.paramMap.get('id')!;
    const albums = WebStorageUtil.get(Key.ALBUMS) as Album[];

    this.album = albums.find((album) => album.id === idParam)!;

  }

  edit(id: number) {
    this._route.navigateByUrl(`albums/${id}/edit`);
  }

  back() {
    this._location.back();
  }

}
