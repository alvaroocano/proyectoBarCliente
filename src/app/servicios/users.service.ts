import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of, lastValueFrom }   from 'rxjs';
import { User } from '../clases/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiRestUrl = 'http://localhost:80/proyectoBar--Servidor/public/api';  
  private httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  async registrar(user:User):Promise<any>{
    try{
      const data= await lastValueFrom(this.http.post<any>(this.apiRestUrl+ "/user/new",user,this.httpOptions));
      return data;
    }catch{
      return {"status":"error"};
    }
  }
}

