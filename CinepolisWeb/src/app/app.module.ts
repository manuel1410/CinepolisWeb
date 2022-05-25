import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app'
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import { LoginUserComponent } from './login-user/login-user.component';
import { InicioUserComponent } from './inicio-user/inicio-user.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { HeaderComponent } from './header/header.component';
import { ComprarEntradasComponent } from './comprar-entradas/comprar-entradas.component';
import { ComidasUserComponent } from './comidas-user/comidas-user.component';
import { DetallesComidaComponent } from './detalles-comida/detalles-comida.component';
import { CarritoComponent } from './carrito/carrito.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    InicioUserComponent,
    DetallesPeliculaComponent,
    HeaderComponent,
    ComprarEntradasComponent,
    ComidasUserComponent,
    DetallesComidaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
