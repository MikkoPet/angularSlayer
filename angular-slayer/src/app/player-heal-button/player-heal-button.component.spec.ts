import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHealButtonComponent } from './player-heal-button.component';

describe('PlayerHealButtonComponent', () => {
  let component: PlayerHealButtonComponent;
  let fixture: ComponentFixture<PlayerHealButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerHealButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerHealButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
