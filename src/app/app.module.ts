import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCollapseNavbar } from './componentes/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CardRestauranteComponent } from './componentes/card-restaurante/card-restaurante.component';
import { TitulosComponent } from './componentes/titulos/titulos.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './componentes/register/register.component';
import { FormReservaComponent } from './componentes/form-reserva/form-reserva.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MisReservasComponent } from './componentes/mis-reservas/mis-reservas.component';
import { EliminarReservasComponent } from './componentes/eliminar-reservas/eliminar-reservas.component';
import { EditarReservasComponent } from './componentes/editar-reservas/editar-reservas.component';
import { FormEditReservasComponent } from './componentes/form-edit-reservas/form-edit-reservas.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { FilterReservasPipe } from './pipes/filter-reservas.pipe';
import { OrderReservasByPipePipe } from './pipes/order-reservas-by-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardRestauranteComponent,
    TitulosComponent,
    LoginComponent,
    RegisterComponent,
    FormReservaComponent,
    FilterPipe,
    OrderByPipe,
    MisReservasComponent,
    EliminarReservasComponent,
    EditarReservasComponent,
    FormEditReservasComponent,
    FilterReservasPipe,
    OrderReservasByPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbdCollapseNavbar,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
