import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTemplateComponent } from './task-template.component';

describe('TaskTemplateComponent', () => {
  let component: TaskTemplateComponent;
  let fixture: ComponentFixture<TaskTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
