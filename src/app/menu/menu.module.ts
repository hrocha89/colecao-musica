import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [MenuComponent],
    imports: [
        BrowserModule
    ],
    exports: [MenuComponent]
})
export class MenuModule {
}
