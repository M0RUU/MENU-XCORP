import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryProfileComponent } from './salary-profile.component';

describe('SalaryProfileComponent', () => {
  let component: SalaryProfileComponent;
  let fixture: ComponentFixture<SalaryProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
