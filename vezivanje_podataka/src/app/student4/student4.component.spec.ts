import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student4Component } from './student4.component';

describe('Student4Component', () => {
  let component: Student4Component;
  let fixture: ComponentFixture<Student4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
