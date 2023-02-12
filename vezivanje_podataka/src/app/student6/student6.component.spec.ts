import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student6Component } from './student6.component';

describe('Student6Component', () => {
  let component: Student6Component;
  let fixture: ComponentFixture<Student6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
