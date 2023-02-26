import { TestBed } from '@angular/core/testing';

import { GestionRestaurantesService } from './gestion-restaurantes.service';

describe('GestionRestaurantesService', () => {
  let service: GestionRestaurantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionRestaurantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
