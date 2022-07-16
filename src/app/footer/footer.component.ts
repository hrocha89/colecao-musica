import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './footer.component.html',
  selector: 'app-footer'
})
export class FooterComponent implements OnInit {

  year!: number;

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
