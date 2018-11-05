import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TabelleService {

  constructor(private httpClient: HttpClient) {}

  aktuelleTabelle() : Observable<TabelleMannschaft[]> {
    return <Observable<TabelleMannschaft[]>>this.httpClient.get('https://www.openligadb.de/api/getbltable/bl1/2018');
  }
}

export interface TabelleMannschaft {
  TeamName: string
  Points: number
  TeamIconUrl: string
}
