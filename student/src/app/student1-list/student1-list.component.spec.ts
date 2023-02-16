import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student1ListComponent } from './student1-list.component';

describe('Student1ListComponent', () => {
  let component: Student1ListComponent;
  let fixture: ComponentFixture<Student1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
