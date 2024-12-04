import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTrackingComponent } from './work-tracking.component';

describe('WorkTrackingComponent', () => {
  let component: WorkTrackingComponent;
  let fixture: ComponentFixture<WorkTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
