import { TestBed } from '@angular/core/testing';

import { GameLogsService } from './game-logs.service';

describe('GameLogsService', () => {
  let service: GameLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
