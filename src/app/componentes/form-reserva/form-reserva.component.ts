import { Component } from '@angular/core';
import { GestionRestaurantesService } from 'src/app/servicios/gestion-restaurantes.service';

import { Reserva } from 'src/app/clases/Reserva';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent{
  nro_personas= 0;
  hora:string="";
  constructor(public reservaServicio:GestionRestaurantesService) {}

  async enviar(){
    this.nro_personas=0;
    this.hora="";
    const fecha=new Date();
    const reserva:Reserva={
      "id":"",
      "fecha":fecha,
      "primero":"",
      "segundo":"",
      "bebida":"",
      "postre":"",
      "nro_personas":this.nro_personas,
      "hora":this.hora,
      "total":0,
      "restaurantes":"Móstoles",
      "user":"alvaro@email.com"
    }
    const resultado=await this.reservaServicio.setReserva(reserva);
    if(resultado.status=="success"){
      alert("Operación realizada");
    }else{
      alert("No se ha podido realizar la operación");
      console.log(resultado.status);
    }
   
  }
}
