import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../model/album';
import { AlbumsService } from '../albums.service';


@Component({
  templateUrl: './albums-form.component.html'
})
export class AlbumsFormComponent implements OnInit {

  album: Album = Album.newAlbum();

  constructor(public service: AlbumsService,
              private _activatedRoute: ActivatedRoute,
              private _route: Router) {
  }

  ngOnInit() {

    let idParam = this._isEdit();

    if (idParam) {
      this.service.getId(idParam).subscribe((album) => {
        this.album = album;
      }, error => {
        console.log('Erro!', error);
        this.album = Album.newAlbum();
      });
    } else {
      this.album = Album.newAlbum();
    }

  }

  saveAlbum() {

    if (this._isEdit()) {
      this.service.update(this.album, this._isEdit()).subscribe(() => {
        console.log('Sucesso');
        this._route.navigateByUrl('albums');
      }, () => {
        console.log('Erro');
      });
      return;
    }

    this.service.create(this.album).subscribe(() => {
      console.log('Sucesso');
      this._route.navigateByUrl('albums');
    }, () => {
      console.log('Erro');
    });

  }

  private _isEdit(): number {
    return +this._activatedRoute.snapshot.paramMap.get('id')! || 0;
  }

}
