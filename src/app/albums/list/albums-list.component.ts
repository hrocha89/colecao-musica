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
    this.service.delete(album.id).subscribe(() => {
      this._getAlbums();
    }, error => {
      console.log('Erro!', error);
    })
  }

  private _getAlbums() {
    this.service.findAll().subscribe((albums) => {
      this.albums = albums.map((album) => (Album.toGeneric(album)));
    }, error => {
      console.log('Erro!', error);
      this.albums = [];
    });
  }

}
