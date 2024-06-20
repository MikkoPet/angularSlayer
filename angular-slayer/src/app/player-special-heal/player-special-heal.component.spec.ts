import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSpecialHealComponent } from './player-special-heal.component';

describe('PlayerSpecialHealComponent', () => {
  let component: PlayerSpecialHealComponent;
  let fixture: ComponentFixture<PlayerSpecialHealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSpecialHealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSpecialHealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
