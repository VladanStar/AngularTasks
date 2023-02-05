import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListaComponent } from './student-lista.component';

describe('StudentListaComponent', () => {
  let component: StudentListaComponent;
  let fixture: ComponentFixture<StudentListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
