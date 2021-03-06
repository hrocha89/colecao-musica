import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../model/album';
import { AlbumsService } from '../albums.service';


@Component({
  templateUrl: './albums-detail.component.html'
})
export class AlbumsDetailComponent implements OnInit {

  album!: Album

  constructor(public service: AlbumsService,
              private _route: Router,
              private _activatedRoute: ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit() {

    let idParam = +this._activatedRoute.snapshot.paramMap.get('id')!;
    this._getAlbum(idParam);

  }

  edit(id: number) {
    this._route.navigateByUrl(`albums/${id}/edit`);
  }

  back() {
    this._location.back();
  }

  private _getAlbum(id: number) {
    this.service.getId(id).subscribe((a) => {
      this.album = a;
    }, error => {
      console.log('Erro!', error);
      this.album = Album.newAlbum();
    })
  }

}
