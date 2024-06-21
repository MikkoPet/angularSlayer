import { TestBed } from '@angular/core/testing';

import { BossDialogueService } from './boss-dialogue.service';

describe('BossDialogueService', () => {
  let service: BossDialogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BossDialogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
