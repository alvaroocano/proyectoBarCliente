import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRestauranteComponent } from './componentes/card-restaurante/card-restaurante.component';
import { FormReservaComponent } from './componentes/form-reserva/form-reserva.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { TitulosComponent } from './componentes/titulos/titulos.component';
import { MisReservasComponent } from './componentes/mis-reservas/mis-reservas.component';
import { EliminarReservasComponent } from './componentes/eliminar-reservas/eliminar-reservas.component';
import { EditarReservasComponent } from './componentes/editar-reservas/editar-reservas.component';
import { FormEditReservasComponent } from './componentes/form-edit-reservas/form-edit-reservas.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { MapawebComponent } from './componentes/mapaweb/mapaweb.component';
import { DeclaracionComponent } from './componentes/declaracion/declaracion.component';

const routes: Routes = [
  {path: '',component:TitulosComponent, data:{
    titulo:'HOME'
  }},
  {path: 'verRestaurantes',component:CardRestauranteComponent, data:{
    titulo:'UBICACIONES',
  }},
  {path: 'reservas',component:ReservasComponent, data:{
    titulo:'RESERVAS'
  }},
  {path: 'altaReservas',component:FormReservaComponent, data: { titulo: 'RESERVAS / RESEVAR' },},
  {path: 'misReservas',component:MisReservasComponent, data:{
    titulo:'RESERVAS / MIS RESERVAS'
  }},
  {path: 'anularReservas',component:EliminarReservasComponent, data:{
    titulo:'RESERVAS / ANULAR RESERVA'
  }},
  {path: 'editarReservas',component:EditarReservasComponent, data:{
    titulo:'RESERVAS / EDITAR RESERVAS'
  }},
  {path: 'edit/:id',component:FormEditReservasComponent},
  { path: 'login', component:LoginComponent, pathMatch: "full" },
  { path: 'register', component:RegisterComponent, pathMatch: "full" , data:{
    titulo:'REGISTRO'
  }},
  { path: 'mapaWeb', component:MapawebComponent, pathMatch: "full" , data:{
    titulo:'MAPA WEB'
  }},
  { path: 'declaracion', component:DeclaracionComponent, pathMatch: "full" , data:{
    titulo:'DECLARACIÓN DE ACCESIBILIDAD'
  }}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
