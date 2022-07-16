import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { Menu } from '../model/interface/menu';

@Component({
  templateUrl: './menu.component.html',
  selector: 'app-menu'
})
export class MenuComponent implements AfterViewInit {

  @Input() menu: Menu[] = [];

  @ViewChild('mobile') sideNav?: ElementRef;

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

}
