import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Liga} from "../tabelle.service";

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent {

  @Input()
  private liga : Liga = Liga.ErsteLiga;

  @Output()
  ligaChange = new EventEmitter<Liga>();

  updateLiga(ligaName:string){
    this.liga = Liga[ligaName];
    this.ligaChange.emit(this.liga)
  }

  ligen(){
    return Object.keys(Liga);
  }

  isSelected(ligaName:string){
    console.log(this.liga)
    return this.liga === Liga[ligaName];
  }

}
