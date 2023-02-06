import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student4ListaComponent } from './student4-lista.component';

describe('Student4ListaComponent', () => {
  let component: Student4ListaComponent;
  let fixture: ComponentFixture<Student4ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student4ListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student4ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
