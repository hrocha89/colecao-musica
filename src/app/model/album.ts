import { Artist } from './artist';
import { Genre } from './genre';

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
}
