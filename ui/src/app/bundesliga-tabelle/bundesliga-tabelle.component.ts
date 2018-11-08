import {Component, OnInit} from '@angular/core';
import {Liga, TabelleMannschaft, TabelleService} from "../tabelle.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-bundesliga-tabelle',
  templateUrl: './bundesliga-tabelle.component.html',
  styleUrls: ['./bundesliga-tabelle.component.css']
})
export class BundesligaTabelleComponent implements OnInit {
  private _liga: Liga;

  constructor(private tabelleService: TabelleService) {
  }

  ngOnInit() {
    this.liga = Liga.ErsteLiga;
  }

  set liga(liga: Liga) {
    this._liga = liga;
    this.tabelleService.loadTabelle(liga);
  }

  get liga() {
    return this._liga;
  }

}
