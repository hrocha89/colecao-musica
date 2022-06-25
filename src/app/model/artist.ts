import { Select } from './select';

export class Artist extends Select {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    super(id);
    this.id = id;
    this.name = name;
  }
}
