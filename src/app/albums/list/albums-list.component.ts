import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericList } from '../../shared/list/generic-list';
import { Album } from '../../model/album';
import { Artist } from '../../model/artist';

@Component({
  template: `
    <app-list [genericList]="albums"
              [newUrl]="'new'"
              (genericListEmitter)="edit($event)"></app-list>
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


  edit(album: GenericList) {
    this._route.navigate([album?.id, 'edit'], {relativeTo: this._activatedRoute});
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
    return [
      new Album(1, 'Kind of Blue', new Artist(1, 'Miles Davis'), 1959, 'kind-of-blue.jpg'),
      new Album(2, 'Volume 3', new Artist(2, 'Trio Corrente'), 2016, 'trio-corrente.jpg'),
      new Album(3, 'Maiden Voyage', new Artist(3, 'Herbie Hancock'), 1965, 'maiden-voyage.jpg')
    ]
  }

}
