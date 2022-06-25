import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { ArtistComponent } from './artist/artist.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'artists', component: ArtistComponent},
  {path: 'favorites', component: FavoriteComponent},
  {path: 'albums', loadChildren: () => import('./albums/albums.module').then((m) => m.AlbumsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
