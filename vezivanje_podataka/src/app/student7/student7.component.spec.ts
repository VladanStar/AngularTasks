import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student7Component } from './student7.component';

describe('Student7Component', () => {
  let component: Student7Component;
  let fixture: ComponentFixture<Student7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
