import { Component, Input } from '@angular/core';
import { data } from 'jquery';
import { User } from 'src/app/clases/User';
import { UsersService } from 'src/app/servicios/users.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public usuarioServicio: UsersService, private router: Router) { }

  @Input()
  email!: string;
  @Input()
  nombre!: string;
  @Input()
  password!: string;

  async enviar() {
    let error = false;

    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(this.email)) {
      alert("El email no tiene el formato correcto");
      error = true;
    }


    if ((!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(this.nombre))) {
      alert("El nombre no tiene el formato correcto");
      error = true;
    } 

    if (!error) {
      const user: User = {
        "id": "",
        "email": this.email,
        "roles": JSON.parse('["ROLE_USER"]'),
        "nombre": this.nombre,
        "password": this.password,
        "reservas": ""

      }
      const resultado = await this.usuarioServicio.registrar(user);
      if (resultado) {
        alert("Operación realizada");
        this.router.navigate(['/']);
      } else {
        alert("No se ha podido realizar la operación");
        console.log(resultado.status);
      }

    }
  }

}

