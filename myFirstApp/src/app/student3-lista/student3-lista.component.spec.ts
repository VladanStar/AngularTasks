import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student3ListaComponent } from './student3-lista.component';

describe('Student3ListaComponent', () => {
  let component: Student3ListaComponent;
  let fixture: ComponentFixture<Student3ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student3ListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student3ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
