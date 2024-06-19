import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterHealthBarComponent } from './monster-health-bar.component';

describe('MonsterHealthBarComponent', () => {
  let component: MonsterHealthBarComponent;
  let fixture: ComponentFixture<MonsterHealthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterHealthBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterHealthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
