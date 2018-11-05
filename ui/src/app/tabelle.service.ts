import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TabelleService {

  constructor(private httpClient: HttpClient) {}

  tabelle(liga: Liga) : Observable<TabelleMannschaft[]> {
    let url = 'https://www.openligadb.de/api/getbltable/'+liga+'/2018';
    return <Observable<TabelleMannschaft[]>>this.httpClient.get(url);
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
