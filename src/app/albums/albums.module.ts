import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsFormComponent } from './form/albums-form.component';
import { AlbumsListComponent } from './list/albums-list.component';
import { ListModule } from '../shared/list/list.module';
import { AlbumsDetailComponent } from './detail/albums-detail.component';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  imports: [
    ListModule,
    RouterModule,
    AlbumsRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AlbumsFormComponent,
    AlbumsListComponent,
    AlbumsDetailComponent
  ]
})
export class AlbumsModule {

}
