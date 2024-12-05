import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollidayComponent } from './holliday.component';

describe('HollidayComponent', () => {
  let component: HollidayComponent;
  let fixture: ComponentFixture<HollidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HollidayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HollidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
