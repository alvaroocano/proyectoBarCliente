import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditReservasComponent } from './form-edit-reservas.component';

describe('FormEditReservasComponent', () => {
  let component: FormEditReservasComponent;
  let fixture: ComponentFixture<FormEditReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
