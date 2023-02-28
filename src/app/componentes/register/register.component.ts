import { Component } from '@angular/core';
import { data } from 'jquery';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string="";
  password:string="";
  nombre:string="";
  constructor(public usuarioServicio:UsersService) {}

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.nombre);

    const user={
      nombre:this.nombre,
      password:this.password,
      email:this.email
    }

    this.usuarioServicio.register(user).subscribe((data)=>{console.log(data)});
  }
}
