import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { FooterModule } from './footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumsModule } from './albums/albums.module';
import { LandPageModule } from './land-page/land-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule,
    AlbumsModule,
    LandPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
