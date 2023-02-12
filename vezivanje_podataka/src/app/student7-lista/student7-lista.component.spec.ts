import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student7ListaComponent } from './student7-lista.component';

describe('Student7ListaComponent', () => {
  let component: Student7ListaComponent;
  let fixture: ComponentFixture<Student7ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student7ListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student7ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
