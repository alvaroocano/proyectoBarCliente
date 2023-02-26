import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCollapseNavbar } from './componentes/menu/menu.component';
import { CardRestauranteComponent } from './componentes/card-restaurante/card-restaurante.component';


@NgModule({
  declarations: [
    AppComponent,
    CardRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbdCollapseNavbar,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
