import { TestBed } from '@angular/core/testing';

import { MonsterActionService } from './monster-action.service';

describe('MonsterActionService', () => {
  let service: MonsterActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
