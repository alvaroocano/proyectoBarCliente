import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { Observable,of, lastValueFrom }   from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Restaurante } from '../clases/Restaurante';

@Injectable({
  providedIn: 'root'
})
export class GestionRestaurantesService {
  private apiRestUrl = 'http://localhost:2525';  // en producción /heroes
  private httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  
}
