import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/clases/Reserva';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent implements OnInit{
    reserva: Reserva[]=[];

    constructor() {}

    ngOnInit() {}

    formularioEnviado(){
      alert("Enviado");
    }
    
}
