import { TestBed } from '@angular/core/testing';

import { HealthDisplayHandlerService } from './health-display-handler.service';

describe('HealthDisplayHandlerService', () => {
  let service: HealthDisplayHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthDisplayHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
