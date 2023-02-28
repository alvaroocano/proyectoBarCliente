import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { Observable,of, lastValueFrom }   from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Restaurante } from '../clases/Restaurante';
import { Reserva } from '../clases/Reserva';

@Injectable({
  providedIn: 'root'
})
export class GestionRestaurantesService {
  private apiRestUrl = 'http://localhost:80/proyectoBar--Servidor/public/api';  
  private httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  async getRestaurantes():Promise<Restaurante[]>{
    try{
      const data=await lastValueFrom(this.http.get<Restaurante[]>(this.apiRestUrl + "/restaurantes"));
      return data
    }catch{
      return [];
    }
  }

  async setReserva():Promise<Reserva[]>{
    try{
      const data=await lastValueFrom(this.http.get<Reserva[]>(this.apiRestUrl + "/reservas/new"));
      return data
    }catch{
      return [];
    }
  }

  
  
}
