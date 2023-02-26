import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRestauranteComponent } from './componentes/card-restaurante/card-restaurante.component';

const routes: Routes = [
  {path: 'verRestaurantes',component:CardRestauranteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
