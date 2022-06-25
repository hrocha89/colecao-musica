import { HttpClient, HttpHeaders } from '@angular/common/http';

export class CrudService<T> {

  readonly URL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  private _path!: string;


  constructor(protected httpClient: HttpClient, protected path: string) {
    this._path = path;
  }

  findAll(): Promise<T[]> {
    return this.httpClient.get<T[]>(`${this.URL}/${this._path}`).toPromise();
  }

  getId(id: number): Promise<T> {
    return this.httpClient.get<T>(`${this.URL}/${this._path}/${id}`).toPromise();
  }

  create(entity: T): Promise<T> {
    return this.httpClient.post<T>(
      `${this.URL}/${this._path}`,
      JSON.stringify(entity),
      this.httpOptions).toPromise();
  }

  update(entity: T, id: number): Promise<T> {
    return this.httpClient.put<T>(
      `${this.URL}/${this._path}/${id}`,
      JSON.stringify(entity),
      this.httpOptions).toPromise();
  }

  delete(id: number): Promise<void> {
    return this.httpClient.delete<void>(`${this.URL}/${this.path}/${id}`).toPromise();
  }

}
