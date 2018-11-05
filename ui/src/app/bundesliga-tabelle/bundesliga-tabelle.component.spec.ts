import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaTabelleComponent } from './bundesliga-tabelle.component';

describe('BundesligaTabelleComponent', () => {
  let component: BundesligaTabelleComponent;
  let fixture: ComponentFixture<BundesligaTabelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundesligaTabelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligaTabelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
