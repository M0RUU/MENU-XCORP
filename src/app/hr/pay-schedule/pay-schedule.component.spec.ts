import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayScheduleComponent } from './pay-schedule.component';

describe('PayScheduleComponent', () => {
  let component: PayScheduleComponent;
  let fixture: ComponentFixture<PayScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
