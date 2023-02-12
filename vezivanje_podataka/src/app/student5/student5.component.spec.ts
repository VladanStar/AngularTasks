import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student5Component } from './student5.component';

describe('Student5Component', () => {
  let component: Student5Component;
  let fixture: ComponentFixture<Student5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
