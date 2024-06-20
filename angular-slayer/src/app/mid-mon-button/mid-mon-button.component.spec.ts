import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidMonButtonComponent } from './mid-mon-button.component';

describe('MidMonButtonComponent', () => {
  let component: MidMonButtonComponent;
  let fixture: ComponentFixture<MidMonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidMonButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidMonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
