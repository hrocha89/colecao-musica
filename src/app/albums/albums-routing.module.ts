import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './list/albums-list.component';
import { AlbumsFormComponent } from './form/albums-form.component';
import { AlbumsDetailComponent } from './detail/albums-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AlbumsListComponent
  },
  {
    path: 'new',
    component: AlbumsFormComponent
  },
  {
    path: ':id/edit',
    component: AlbumsFormComponent
  },
  {
    path: ':id/detail',
    component: AlbumsDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {

}
