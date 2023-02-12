import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student5ListaComponent } from './student5-lista.component';

describe('Student5ListaComponent', () => {
  let component: Student5ListaComponent;
  let fixture: ComponentFixture<Student5ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student5ListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student5ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
