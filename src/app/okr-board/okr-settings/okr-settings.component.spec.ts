import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OKRSettingsComponent } from './okr-settings.component';

describe('OKRSettingsComponent', () => {
  let component: OKRSettingsComponent;
  let fixture: ComponentFixture<OKRSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OKRSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OKRSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
