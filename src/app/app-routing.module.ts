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
import { PaypalComponent } from './componentes/paypal/paypal.component';

const routes: Routes = [
  {path: '',component:TitulosComponent},
  {path: 'verRestaurantes',component:CardRestauranteComponent},
  {path: 'altaReservas',component:FormReservaComponent},
  {path: 'misReservas',component:MisReservasComponent},
  {path: 'anularReservas',component:EliminarReservasComponent},
  {path: 'editarReservas',component:EditarReservasComponent},
  {path: 'paypalPago',component:PaypalComponent},
  {path: 'edit/:id',component:FormEditReservasComponent},
  { path: 'login', component:LoginComponent, pathMatch: "full" },
  { path: 'register', component:RegisterComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
