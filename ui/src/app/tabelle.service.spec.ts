import { TestBed } from '@angular/core/testing';

import { TabelleService } from './tabelle.service';

describe('TabelleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabelleService = TestBed.get(TabelleService);
    expect(service).toBeTruthy();
  });
});
