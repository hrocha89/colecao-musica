import { Artist } from './artist';

export class Album {
  id: number;
  name: string;
  artist: Artist;
  year: number;
  image: string;

  constructor(id: number, name: string, artist: Artist, year: number, image: string) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.image = image;
  }
}
