import { NgModule } from '@angular/core';
import { AlbumsFormComponent } from './form/albums-form.component';
import { AlbumsListComponent } from './list/albums-list.component';
import { ListModule } from '../shared/list/list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ListModule,
    RouterModule
  ],
  declarations: [
    AlbumsFormComponent,
    AlbumsListComponent
  ]
})
export class AlbumsModule {

}
