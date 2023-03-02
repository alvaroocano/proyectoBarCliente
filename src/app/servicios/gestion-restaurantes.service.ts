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

  async setReserva(reserva:Reserva):Promise<any>{
    try{
      const data= await lastValueFrom(this.http.post<any>(this.apiRestUrl+"/reservas/new",reserva,this.httpOptions));
      return data;
    }catch{
      return {"status":"error"};
    }
  }

  async getReservas(id:String):Promise<Reserva[]>{
    try{
      const data=await lastValueFrom(this.http.get<Reserva[]>(this.apiRestUrl + "/reservas/"+ id));
      return data
    }catch{
      return[];
    }
  }

  async deleteReserva(id:String):Promise<any>{
    try{
      const data= await lastValueFrom(this.http.delete<any>(this.apiRestUrl+"/reservas/delete/"+id));
      return data;
    }catch{
      return {"status":"error"};
    }
  }

  async modReserva(id:String, reserva:Reserva):Promise<any>{
    try{
      const data= await lastValueFrom(this.http.put<any>(this.apiRestUrl+"/reservas/edit/"+id,reserva,this.httpOptions));
      return data;
    }catch{
      return {"status":"error"};
    }
  }

  

  
  
}
