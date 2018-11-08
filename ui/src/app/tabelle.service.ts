import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TabelleService {
  private tabelleSubject: BehaviorSubject<TabelleMannschaft[]> = new BehaviorSubject([]);
  public readonly tabelle$: Observable<TabelleMannschaft[]> = this.tabelleSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  loadTabelle(liga: Liga) : void {
    let url = 'https://www.openligadb.de/api/getbltable/'+liga+'/2018';
    (<Observable<TabelleMannschaft[]>>this.httpClient.get(url))
      .subscribe(tabelle=> this.tabelleSubject.next(tabelle));
  }
}

export interface TabelleMannschaft {
  TeamName: string
  Points: number
  TeamIconUrl: string
}

export enum Liga {
  ErsteLiga = 'bl1',
  ZweiteLiga = 'bl2'
}
