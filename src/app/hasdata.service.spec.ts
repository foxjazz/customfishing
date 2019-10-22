import { TestBed } from '@angular/core/testing';

import { HasdataService } from './hasdata.service';

describe('HasdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HasdataService = TestBed.get(HasdataService);
    expect(service).toBeTruthy();
  });
});
