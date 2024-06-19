import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAttackButtonComponent } from './player-attack-button.component';

describe('PlayerAttackButtonComponent', () => {
  let component: PlayerAttackButtonComponent;
  let fixture: ComponentFixture<PlayerAttackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerAttackButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerAttackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
