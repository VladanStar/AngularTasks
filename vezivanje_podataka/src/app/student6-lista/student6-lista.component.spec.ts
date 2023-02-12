import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student6ListaComponent } from './student6-lista.component';

describe('Student6ListaComponent', () => {
  let component: Student6ListaComponent;
  let fixture: ComponentFixture<Student6ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student6ListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student6ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
