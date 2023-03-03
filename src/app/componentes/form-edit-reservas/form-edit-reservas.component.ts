import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { GestionRestaurantesService } from 'src/app/servicios/gestion-restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/clases/Reserva';
import { Location } from '@angular/common';
import { Restaurante } from 'src/app/clases/Restaurante';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-form-edit-reservas',
  templateUrl: './form-edit-reservas.component.html',
  styleUrls: ['./form-edit-reservas.component.css']
})
export class FormEditReservasComponent {
  restaurantes: Restaurante[]=[];
  reservas:Reserva[]=[];

  nro_personas=new FormControl('', [Validators.required, Validators.nullValidator]);
  
  constructor(public reservaServicio:GestionRestaurantesService,private router: Router,private activatedRoute:ActivatedRoute,private location:Location) {}

  ngOnInit(){
    this.cargarRestaurantes();
  }

  async cargarRestaurantes(){
    this.restaurantes=await this.reservaServicio.getRestaurantes();
  }

  async editarReserva(){
    let nro_personas=0;
    if(!this.nro_personas.value?.trim()){
      alert("El número de personas debe estar relleno");
    }else{
      nro_personas=Number(this.nro_personas.value?.trim());
    }
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const resultado=await this.reservaServicio.modReserva(id,nro_personas);
    if(resultado.status!='error'){
      alert("Reserva modificada");
      this.router.navigate(['/misReservas']);
    }else{
      alert("No se ha podido modificar");
    }

  }
    
}
