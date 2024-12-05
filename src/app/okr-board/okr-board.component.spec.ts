import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OKRBoardComponent } from './okr-board.component';

describe('OKRBoardComponent', () => {
  let component: OKRBoardComponent;
  let fixture: ComponentFixture<OKRBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OKRBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OKRBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
