import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { GestionRestaurantesService } from 'src/app/servicios/gestion-restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/clases/Reserva';
import { Location } from '@angular/common';
import { Restaurante } from 'src/app/clases/Restaurante';

@Component({
  selector: 'app-form-edit-reservas',
  templateUrl: './form-edit-reservas.component.html',
  styleUrls: ['./form-edit-reservas.component.css']
})
export class FormEditReservasComponent {
  restaurantes: Restaurante[]=[];

  nro_personas=new FormControl('', [Validators.required, Validators.nullValidator]);
  fecha=new FormControl('', [Validators.required, Validators.nullValidator]);
  hora=new FormControl('', [Validators.required, Validators.nullValidator]);
  restaurante=new FormControl('', [Validators.required, Validators.nullValidator]);
  primero=new FormControl('', [Validators.required, Validators.nullValidator]);
  segundo=new FormControl('', [Validators.required, Validators.nullValidator]);
  bebida=new FormControl('', [Validators.required, Validators.nullValidator]);
  postre=new FormControl('', [Validators.required, Validators.nullValidator]);
  
  constructor(public reservaServicio:GestionRestaurantesService,private activatedRoute:ActivatedRoute,private location:Location) {}

  ngOnInit(){
    this.cargarRestaurantes();
  }

  async cargarRestaurantes(){
    this.restaurantes=await this.reservaServicio.getRestaurantes();
  }

  async editarReserva(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      const reserva:Reserva=await this.reservaServicio.modReserva(id);
      if(reserva.id!=""){
        
        this.nro_personas.setValue(reserva.nro_personas.toString());
        this.fecha.setValue(reserva.fecha.toString());
        this.hora.setValue(reserva.hora);
        this.restaurante.setValue(reserva.restaurantes);
        this.primero.setValue(reserva.primero);
        this.segundo.setValue(reserva.segundo);
        this.segundo.setValue(reserva.bebida);
        this.segundo.setValue(reserva.postre);
      }else{
        alert("No existe esa flor");
        this.location.back();
      }
    }
  }
}
