import { Component } from '@angular/core';
import { GestionRestaurantesService } from 'src/app/servicios/gestion-restaurantes.service';
import {FormControl, Validators} from '@angular/forms';
import { Reserva } from 'src/app/clases/Reserva';
import { Restaurante } from 'src/app/clases/Restaurante';
import { PaypalComponent } from '../paypal/paypal.component';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent{
  restaurantes: Restaurante[]=[];
  
  constructor(public reservaServicio:GestionRestaurantesService) {}
  nro_personas=new FormControl('', [Validators.required, Validators.nullValidator]);
  fecha=new FormControl('', [Validators.required, Validators.nullValidator]);
  hora=new FormControl('', [Validators.required, Validators.nullValidator]);
  restaurante=new FormControl('', [Validators.required, Validators.nullValidator]);
  primero=new FormControl('', [Validators.required, Validators.nullValidator]);
  segundo=new FormControl('', [Validators.required, Validators.nullValidator]);
  bebida=new FormControl('', [Validators.required, Validators.nullValidator]);
  postre=new FormControl('', [Validators.required, Validators.nullValidator]);
  total=new FormControl('', [Validators.required, Validators.nullValidator]);

  ngOnInit(){
    this.cargarRestaurantes();
  }

  async reservar(){
    let nro_personas=0;
    if(!this.nro_personas.value?.trim()){
      alert("El número de personas debe estar relleno");
    }else{
      nro_personas=Number(this.nro_personas.value?.trim());
    }

    let fecha="";
    if(!this.fecha.value?.trim()){
      alert("La fecha debe estar rellena");
    }else{
      fecha=this.fecha.value?.trim();
    }

    let primero="";
    if(!this.primero.value?.trim()){
      alert("El primero debe estar relleno");
    }else{
      primero=this.primero.value?.trim();
    }

    let segundo="";
    if(!this.segundo.value?.trim()){
      alert("El segundo debe estar relleno");
    }else{
      segundo=this.segundo.value?.trim();
    }

    let bebida="";
    if(!this.bebida.value?.trim()){
      alert("La bebida debe estar rellena");
    }else{
      bebida=this.bebida.value?.trim();
    }

    let postre="";
    if(!this.postre.value?.trim()){
      alert("El postre debe estar relleno");
    }else{
      postre=this.postre.value?.trim();
    }

    let restaurante="";
    if(!this.restaurante.value?.trim()){
      alert("El restaurante debe estar relleno");
    }else{
      restaurante=this.restaurante.value?.trim();
    }

    let hora="";
    if(!this.hora.value?.trim()){
      alert("La hora debe estar rellena");
    }else{
      hora=this.hora.value?.trim();
    }
    const reserva:Reserva={
      "id":"",
      "fecha":fecha+" 00:00:00",
      "primero":primero,
      "segundo":segundo,
      "bebida":bebida,
      "postre":postre,
      "nro_personas":nro_personas,
      "hora":hora,
      "total":12.5,
      "restaurantes":restaurante,
      "user":"13"
    }
    const resultado=await this.reservaServicio.setReserva(reserva);
    if(resultado.status!="error"){
      alert("Operación realizada");
    }else{
      alert("No se ha podido realizar la operación");
      console.log(resultado.status);
    }
   
  }

  async cargarRestaurantes(){
    this.restaurantes=await this.reservaServicio.getRestaurantes();
  }


}
