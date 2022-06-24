import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';

const routes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'albums', loadChildren: () => import('./albums/albums.module').then((m) => m.AlbumsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
