import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapawebComponent } from './mapaweb.component';

describe('MapawebComponent', () => {
  let component: MapawebComponent;
  let fixture: ComponentFixture<MapawebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapawebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapawebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
