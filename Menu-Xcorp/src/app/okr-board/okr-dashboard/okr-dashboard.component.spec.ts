import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OKRDashboardComponent } from './okr-dashboard.component';

describe('OKRDashboardComponent', () => {
  let component: OKRDashboardComponent;
  let fixture: ComponentFixture<OKRDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OKRDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OKRDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
