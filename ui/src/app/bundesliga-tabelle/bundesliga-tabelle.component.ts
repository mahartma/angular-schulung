import {Component, Inject, OnInit} from '@angular/core';
import {TabelleMannschaft, TabelleService} from "../tabelle.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-bundesliga-tabelle',
  templateUrl: './bundesliga-tabelle.component.html',
  styleUrls: ['./bundesliga-tabelle.component.css']
})
export class BundesligaTabelleComponent implements OnInit {
  private tabelle: Observable<TabelleMannschaft[]>;

  constructor(private tabelleService : TabelleService) { }

  ngOnInit() {
    this.tabelle = this.tabelleService.aktuelleTabelle();
    this.tabelle
        .subscribe(data=>
          console.log(data)
        );
  }

}
