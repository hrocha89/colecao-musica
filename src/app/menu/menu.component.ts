import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  templateUrl: './menu.component.html',
  selector: 'app-menu'
})
export class MenuComponent implements AfterViewInit {

  @ViewChild('mobile') sideNav?: ElementRef;

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

}
