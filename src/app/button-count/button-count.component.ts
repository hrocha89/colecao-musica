import { Component } from '@angular/core';

@Component({
  templateUrl: './button-count.component.html',
  selector: 'app-button-count'
})
export class ButtonCountComponent {

  count: number = 0;

  buttonCount() {
    this.count++;
  }

}
