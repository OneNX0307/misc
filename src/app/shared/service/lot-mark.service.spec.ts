import { TestBed } from '@angular/core/testing';

import { LotMarkService } from './lot-mark.service';

describe('LotMarkService', () => {
  let service: LotMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
