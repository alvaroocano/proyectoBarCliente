import { Component } from '@angular/core';
import { GestionRestaurantesService } from 'src/app/servicios/gestion-restaurantes.service';
import { ICreateOrderRequest } from "ngx-paypal";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Reserva } from 'src/app/clases/Reserva';
import { Restaurante } from 'src/app/clases/Restaurante';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent{
  restaurantes: Restaurante[]=[];
  public payPalConfig: any;
  public showPaypalButtons: boolean | undefined;

  
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
  
  ngOnInit() {
    this.cargarRestaurantes();
  }

  async validar() {
    let error=false;
    let nro_personas=0;
    if(!this.nro_personas.value?.trim() ||!Number(this.nro_personas.value?.trim())){
      error=true;
      alert("El número de personas debe estar relleno");
      
    }else{
      nro_personas=Number(this.nro_personas.value?.trim());
    }

    let fecha="";
    if(!this.fecha.value?.trim()){
      error=true;
      alert("La fecha debe estar rellena");
    }else{
      fecha=this.fecha.value?.trim();
    }

    let primero="";
    if(!this.primero.value?.trim()){
      error=true;
      alert("El primero debe estar relleno");
    }else{
      primero=this.primero.value?.trim();
    }

    let segundo="";
    if(!this.segundo.value?.trim()){
      error=true;
      alert("El segundo debe estar relleno");
    }else{
      segundo=this.segundo.value?.trim();
    }

    let bebida="";
    if(!this.bebida.value?.trim()){
      error=true;
      alert("La bebida debe estar rellena");
    }else{
      bebida=this.bebida.value?.trim();
    }

    let postre=""; 
    if(!this.postre.value?.trim()){ 
      error=true;
      alert("El postre debe estar relleno");
    }else{
      postre=this.postre.value?.trim();
    }

    let restaurante="";
    if(!this.restaurante.value?.trim()){
      error=true;
      alert("El restaurante debe estar relleno");
    }else{
      restaurante=this.restaurante.value?.trim();
    }

    let hora="";
    if(!this.hora.value?.trim()){
      error=true;
      alert("La hora debe estar rellena");
    }else{
      hora=this.hora.value?.trim();
    }

    if(!error){
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
        "user":"1"
      }
      this.showPaypalButtons = true;
      this.payPalConfig = {
      currency: "EUR",
      clientId: "AYvU7p49APJ3TWCP7EPq6Z1Sm7LijDirPdDI-G6DjNasJ2tyIVCwb0IZL1v5cKy_tw7qPr_2ybS62gCR",
      createOrder: () =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: "9.99",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              },
              items: [
                {
                  name: "Enterprise Subscription",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data: any, actions: { order: { get: () => Promise<any>; }; }) => {

        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then(details => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: async (data: any) => {
        
        const resultado=await this.reservaServicio.setReserva(reserva, "1", restaurante);
        if(resultado.status!="error"){
          alert("Operación realizada");
        }else{
          alert("No se ha podido realizar la operación");
          console.log(resultado.status);
          console.log(restaurante);
        }
      
      },
      onCancel: (data: any, actions: any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err: any) => {
        console.log("OnError", err);
      },
      onClick: (data: any, actions: any) => {
        console.log("onClick", data, actions);
      }
    };
      
  }
  }
  

  back(){
    this.showPaypalButtons = false;
  }

  async cargarRestaurantes(){
    this.restaurantes=await this.reservaServicio.getRestaurantes();
  }


}
