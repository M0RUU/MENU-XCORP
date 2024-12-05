import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardManagementComponent } from './onboard-management.component';

describe('OnboardManagementComponent', () => {
  let component: OnboardManagementComponent;
  let fixture: ComponentFixture<OnboardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
