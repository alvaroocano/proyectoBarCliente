import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { data } from 'jquery';
import { User } from 'src/app/clases/User';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public usuarioServicio:UsersService) {}

    email:string="";
    nombre=new FormControl('', [Validators.required, Validators.nullValidator]);;
    password:string="";
    async enviar(){
      let email=this.email;
      let nombre="";
      if(!this.nombre.value?.trim()){
        alert("El nombre debe estar relleno");
      }else{
        nombre=this.nombre.value?.trim();
      }
      let password=this.password;
      const user:User={
        "id":"",
        "email":email,
        "roles":JSON.parse("{}"),
        "nombre":nombre,
        "password":password,
        "reservas":""

      }
      const resultado=await this.usuarioServicio.registrar(user);
      if(resultado.status=="Usuario Creado"){
        alert("Operación realizada");
      }else{
        alert("No se ha podido realizar la operación");
        console.log(resultado.status);
      }
     
    }
  }

