import { TestBed } from '@angular/core/testing';

import { BossStatsService } from './boss-stats.service';

describe('BossStatsService', () => {
  let service: BossStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BossStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
