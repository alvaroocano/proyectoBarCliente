import { Component } from '@angular/core';
import { Reserva } from 'src/app/clases/Reserva';
import { GestionRestaurantesService } from 'src/app/servicios/gestion-restaurantes.service';

@Component({
  selector: 'app-editar-reservas',
  templateUrl: './editar-reservas.component.html',
  styleUrls: ['./editar-reservas.component.css']
})
export class EditarReservasComponent {
  columnasMostradas: string[] = ['Fecha', 'Hora', 'Personas','Precio Por Persona'];
  columnasAMostrar: string[] = this.columnasMostradas.slice();
  reservas:Reserva[]=[];

  constructor(private gestionarReservas:GestionRestaurantesService){}

  ngOnInit(){
    this.cargarReservas();
  }

  async cargarReservas(){
    this.reservas = await this.gestionarReservas.getReservas("13");
    this.reservas.forEach(element => {
      let fechaBien=element.fecha.split(" ")[0];
      element.fecha=fechaBien
    });
  }

  async editarReserva($id:string){
    console.log($id);
    location.href="/edit/"+$id;
  }
}
