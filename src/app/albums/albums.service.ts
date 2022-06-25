import { CrudService } from '../shared/service/crud.service';
import { Album } from '../model/album';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService extends CrudService<Album> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'albums');
  }

}
