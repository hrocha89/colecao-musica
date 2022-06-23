import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericList } from './generic-list';

@Component({
  templateUrl: './list.component.html',
  selector: 'app-list'
})
export class ListComponent {

  @Input() genericList: GenericList[] = [];
  @Input() showEdit: boolean = true;
  @Input() newUrl!: string;
  @Output() genericListEmitter = new EventEmitter<GenericList>();

  edit(gl: GenericList) {
    this.genericListEmitter.emit(gl);
  }

}
