import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  register(user:any): Observable<any>{
    return this.http.post("http://localhost:80/proyectoBar--Servidor/public/api/user/new",user);
  }
}

