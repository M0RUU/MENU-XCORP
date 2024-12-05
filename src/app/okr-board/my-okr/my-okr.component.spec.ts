import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOKRComponent } from './my-okr.component';

describe('MyOKRComponent', () => {
  let component: MyOKRComponent;
  let fixture: ComponentFixture<MyOKRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOKRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOKRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
