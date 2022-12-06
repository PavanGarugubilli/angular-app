import { TestBed } from '@angular/core/testing';

import { TaleserviceService } from './taleservice.service';

describe('TaleserviceService', () => {
  let service: TaleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
