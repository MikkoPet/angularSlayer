import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyMonButtonComponent } from './easy-mon-button.component';

describe('EasyMonButtonComponent', () => {
  let component: EasyMonButtonComponent;
  let fixture: ComponentFixture<EasyMonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyMonButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyMonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
