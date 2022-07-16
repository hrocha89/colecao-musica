import { GenericList } from '../shared/component/list/generic-list';

export class Album {
  id: number;
  name: string;
  artist: string;
  year: number;
  image: string;

  constructor(id: number, name: string, artist: string, year: number, image: string) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.image = image;
  }

  static toGeneric(album: Album): GenericList {
    return {
      id: album.id,
      title: `${album.name} - ${album.year}`,
      text: album.artist,
      image: album.image
    }
  }

  static newAlbum(): Album {
    return new Album(0,
      '',
      '',
      0,
      'padrao.jpg')
  }
}
