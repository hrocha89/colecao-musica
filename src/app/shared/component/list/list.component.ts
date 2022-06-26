import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericList } from './generic-list';

@Component({
  templateUrl: './list.component.html',
  selector: 'app-list'
})
export class ListComponent {

  @Input() genericList: GenericList[] = [];
  @Input() showDetail: boolean = true;
  @Input() showDelete: boolean = true;
  @Input() newUrl!: string;
  @Input() title!: string;
  @Output() detailEmitter = new EventEmitter<GenericList>();
  @Output() deleteEmitter = new EventEmitter<GenericList>();

  detail(gl: GenericList) {
    this.detailEmitter.emit(gl);
  }

  delete(gl: GenericList) {

    let confirmation = window.confirm('Tem certeza que deseja excluir?');

    if (!confirmation) {
      return;
    }

    this.deleteEmitter.emit(gl);
  }

}
