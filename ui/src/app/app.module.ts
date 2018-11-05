import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BundesligaTabelleComponent } from './bundesliga-tabelle/bundesliga-tabelle.component';
import { SpieltagComponent } from './spieltag/spieltag.component';

@NgModule({
  declarations: [
    AppComponent,
    BundesligaTabelleComponent,
    SpieltagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }