import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanterButtonComponent } from './banter-button.component';

describe('BanterButtonComponent', () => {
  let component: BanterButtonComponent;
  let fixture: ComponentFixture<BanterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanterButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
