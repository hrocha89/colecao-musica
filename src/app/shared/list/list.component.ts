import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericList } from './generic-list';

@Component({
  templateUrl: './list.component.html',
  selector: 'app-list'
})
export class ListComponent {

  @Input() genericList: GenericList[] = [];
  @Input() showDetail: boolean = true;
  @Input() newUrl!: string;
  @Input() title!: string;
  @Output() detailEmitter = new EventEmitter<GenericList>();

  detail(gl: GenericList) {
    this.detailEmitter.emit(gl);
  }

}
