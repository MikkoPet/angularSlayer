import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFleeButtonComponent } from './player-flee-button.component';

describe('PlayerFleeButtonComponent', () => {
  let component: PlayerFleeButtonComponent;
  let fixture: ComponentFixture<PlayerFleeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerFleeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerFleeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
