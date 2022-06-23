import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums/list/albums-list.component';
import { AlbumsFormComponent } from './albums/form/albums-form.component';
import { LandPageComponent } from './land-page/land-page.component';

const routes: Routes = [
  {
    path: '', component: LandPageComponent
  },
  {
    path: 'albums', component: AlbumsListComponent, children: [
      {
        path: 'new',
        component: AlbumsFormComponent
      },
      {
        path: ':id/edit',
        component: AlbumsFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
