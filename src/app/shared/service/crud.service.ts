import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CrudService<T> {

  readonly URL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  private _path!: string;


  constructor(protected httpClient: HttpClient, protected path: string) {
    this._path = path;
  }

  findAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.URL}/${this._path}`);
  }

  getId(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.URL}/${this._path}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.httpClient.post<T>(
      `${this.URL}/${this._path}`,
      JSON.stringify(entity),
      this.httpOptions);
  }

  update(entity: T, id: number): Observable<T> {
    return this.httpClient.put<T>(
      `${this.URL}/${this._path}/${id}`,
      JSON.stringify(entity),
      this.httpOptions);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.URL}/${this.path}/${id}`);
  }

}
