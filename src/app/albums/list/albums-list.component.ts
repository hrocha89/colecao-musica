import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericList } from '../../shared/list/generic-list';
import { Album } from '../../model/album';
import { WebStorageUtil } from '../../util/web-storage-util';
import { Key } from '../../util/key';

@Component({
  template: `
    <app-list [genericList]="albums"
              [newUrl]="'new'"
              [title]="'Albums'"
              (detailEmitter)="detail($event)"></app-list>
  `
})
export class AlbumsListComponent implements OnInit {

  albums!: GenericList[];

  constructor(private _route: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.albums = this._getListGeneric();
  }


  detail(album: GenericList) {
    this._route.navigate([album?.id, 'detail'], {relativeTo: this._activatedRoute});
  }

  private _getListGeneric = (): GenericList[] => {
    return this._getAlbums().map((album) => ({
      id: album.id,
      title: `${album.name} - ${album.year}`,
      text: album.artist.name,
      image: album.image
    }))
  }

  private _getAlbums = (): Album[] => {
    return WebStorageUtil.get(Key.ALBUMS);
  }

}
