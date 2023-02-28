import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/clases/Restaurante';
import { GestionRestaurantesService } from 'src/app/servicios/gestion-restaurantes.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-card-restaurante',
  templateUrl: './card-restaurante.component.html',
  styleUrls: ['./card-restaurante.component.css']
})
export class CardRestauranteComponent {
  restaurantes: Restaurante[]=[];

  constructor(private gestionarRestaurantes:GestionRestaurantesService){}

  ngOnInit(){
    this.cargarRestaurantes();
  }

  async cargarRestaurantes(){
    this.restaurantes=await this.gestionarRestaurantes.getRestaurantes();
  }

  filterRestaurantes = '';

  order = "";

}
