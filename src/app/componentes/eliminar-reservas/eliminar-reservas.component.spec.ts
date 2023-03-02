import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarReservasComponent } from './eliminar-reservas.component';

describe('EliminarReservasComponent', () => {
  let component: EliminarReservasComponent;
  let fixture: ComponentFixture<EliminarReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
