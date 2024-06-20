import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardMonButtonComponent } from './hard-mon-button.component';

describe('HardMonButtonComponent', () => {
  let component: HardMonButtonComponent;
  let fixture: ComponentFixture<HardMonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardMonButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardMonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
