import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericList } from '../../shared/component/list/generic-list';
import { Album } from '../../model/album';
import { WebStorageUtil } from '../../util/web-storage-util';
import { Key } from '../../util/key';
import { AlbumsService } from '../albums.service';

@Component({
  template: `
    <app-list [genericList]="albums"
              [newUrl]="'new'"
              [title]="'Albums'"
              (detailEmitter)="detail($event)"
              (deleteEmitter)="delete($event)"></app-list>
  `
})
export class AlbumsListComponent implements OnInit {

  albums!: GenericList[];

  constructor(public service: AlbumsService,
              private _route: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.findAll().then((albums: Album[]) => {
      this.albums = albums.map((album) => (Album.toGeneric(album)))
    }).catch((e) => {
      console.log('error', e);
    })
  }


  detail(album: GenericList) {
    this._route.navigate([album?.id, 'detail'], {relativeTo: this._activatedRoute});
  }

  delete(album: GenericList) {
    const albums = WebStorageUtil.get(Key.ALBUMS) as Album[];

    const remove = albums.find(a => a.id === album.id)!;

    let indexOf = albums.indexOf(remove);
    albums.splice(indexOf, 1);

    WebStorageUtil.set(Key.ALBUMS, albums);

    this.albums = this._getListGeneric();
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
