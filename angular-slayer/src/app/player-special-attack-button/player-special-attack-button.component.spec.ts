import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSpecialAttackButtonComponent } from './player-special-attack-button.component';

describe('PlayerSpecialAttackButtonComponent', () => {
  let component: PlayerSpecialAttackButtonComponent;
  let fixture: ComponentFixture<PlayerSpecialAttackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSpecialAttackButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSpecialAttackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
