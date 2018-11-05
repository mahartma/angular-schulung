import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spieltag',
  templateUrl: './spieltag.component.html',
  styleUrls: ['./spieltag.component.css']
})
export class SpieltagComponent implements OnInit {

  @Input()
  private spieltag : number = 0;

  constructor() { }

  ngOnInit() {
  }

}
