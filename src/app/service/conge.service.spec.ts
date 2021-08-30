import { TestBed } from '@angular/core/testing';

import { CongeService } from './conge.service';

describe('CongeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CongeService = TestBed.get(CongeService);
    expect(service).toBeTruthy();
  });
});
