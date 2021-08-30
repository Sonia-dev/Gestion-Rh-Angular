import { TestBed } from '@angular/core/testing';

import { FileservService } from './fileserv.service';

describe('FileservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileservService = TestBed.get(FileservService);
    expect(service).toBeTruthy();
  });
});
