import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/clases/Reserva';
import { GestionRestaurantesService } from 'src/app/servicios/gestion-restaurantes.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {
  columnasMostradas: string[] = ['Fecha', 'Hora', 'Personas', 'Descripción','Total'];
  columnasAMostrar: string[] = this.columnasMostradas.slice();
  reservas:Reserva[]=[];

  constructor(private gestionarReservas:GestionRestaurantesService){}

  ngOnInit(){
    this.cargarReservas();
  }

  async cargarReservas(){
    this.reservas = await this.gestionarReservas.getReservas("1");
  }

  objectKeys (objeto: any) {

    const keys = Object.keys(objeto);
 
    console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
 
    return keys;
 
 }


}
