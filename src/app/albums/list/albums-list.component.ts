import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericList } from '../../shared/component/list/generic-list';
import { Album } from '../../model/album';
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
    this._getAlbums();
  }


  detail(album: GenericList) {
    this._route.navigate([album?.id, 'detail'], {relativeTo: this._activatedRoute});
  }

  delete(album: GenericList) {
    this.service.delete(album.id)
      .then()
      .catch((e) => {
        console.log('Erro!', e);
      });

    this._getAlbums();
  }

  private _getAlbums() {
    this.service.findAll().then((albums: Album[]) => {
      this.albums = albums.map((album) => (Album.toGeneric(album)))
    }).catch((e) => {
      console.log('Erro!', e);
      this.albums = [];
    })
  }

}
