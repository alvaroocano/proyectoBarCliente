import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRestauranteComponent } from './componentes/card-restaurante/card-restaurante.component';
import { FormReservaComponent } from './componentes/form-reserva/form-reserva.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { TitulosComponent } from './componentes/titulos/titulos.component';

const routes: Routes = [
  {path: '',component:TitulosComponent},
  {path: 'verRestaurantes',component:CardRestauranteComponent},
  {path: 'altaReservas',component:FormReservaComponent},
  { path: 'login', component:LoginComponent, pathMatch: "full" },
  { path: 'register', component:RegisterComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
