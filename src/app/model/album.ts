import { Artist } from './artist';
import { Genre } from './genre';
import { GenericList } from '../shared/component/list/generic-list';

export class Album {
  id: number;
  name: string;
  artist: Artist;
  year: number;
  image: string;
  genre: Genre;

  constructor(id: number, name: string, artist: Artist, year: number, image: string, genre: Genre) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.image = image;
    this.genre = genre;
  }

  static toGeneric(album: Album): GenericList {
    return {
      id: album.id,
      title: `${album.name} - ${album.year}`,
      text: album.artist.name,
      image: album.image
    }
  }
}
