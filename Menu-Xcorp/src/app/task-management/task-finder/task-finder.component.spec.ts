import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFinderComponent } from './task-finder.component';

describe('TaskFinderComponent', () => {
  let component: TaskFinderComponent;
  let fixture: ComponentFixture<TaskFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
