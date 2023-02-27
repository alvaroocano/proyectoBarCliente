import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRestauranteComponent } from './componentes/card-restaurante/card-restaurante.component';
import { TitulosComponent } from './componentes/titulos/titulos.component';

const routes: Routes = [
  {path: '',component:TitulosComponent},
  {path: 'verRestaurantes',component:CardRestauranteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
