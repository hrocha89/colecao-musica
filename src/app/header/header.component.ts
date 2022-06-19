import { Component } from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-hearder'
})
export class HeaderComponent {

  titulo: string;

  constructor() {
    this.titulo = 'Coleção de Músicas'
  }

}
