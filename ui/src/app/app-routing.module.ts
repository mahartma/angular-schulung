import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BundesligaTabelleComponent} from "./bundesliga-tabelle/bundesliga-tabelle.component";

const routes: Routes = [{path: 'bundesliga-tabelle', component: BundesligaTabelleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
