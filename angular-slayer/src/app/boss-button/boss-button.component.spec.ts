import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossButtonComponent } from './boss-button.component';

describe('BossButtonComponent', () => {
  let component: BossButtonComponent;
  let fixture: ComponentFixture<BossButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
