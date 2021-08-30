import { TestBed } from '@angular/core/testing';

import { AutorisationService } from './autorisation.service';

describe('AutorisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorisationService = TestBed.get(AutorisationService);
    expect(service).toBeTruthy();
  });
});
