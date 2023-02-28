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


@NgModule({
  declarations: [
    AppComponent,
    CardRestauranteComponent,
    TitulosComponent,
    LoginComponent,
    RegisterComponent,
    FormReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbdCollapseNavbar,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
