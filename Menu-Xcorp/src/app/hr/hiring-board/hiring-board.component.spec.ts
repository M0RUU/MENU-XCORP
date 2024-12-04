import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringBoardComponent } from './hiring-board.component';

describe('HiringBoardComponent', () => {
  let component: HiringBoardComponent;
  let fixture: ComponentFixture<HiringBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
