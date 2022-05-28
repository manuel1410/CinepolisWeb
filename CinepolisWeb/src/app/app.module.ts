import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CarritoComponent } from './carrito/carrito.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ComidasAdminComponent } from './comidas-admin/comidas-admin.component';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { ModificarPeliculaComponent } from './modificar-pelicula/modificar-pelicula.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ModificarComidaComponent } from './modificar-comida/modificar-comida.component';
import { AgregarComidaComponent } from './agregar-comida/agregar-comida.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component'

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
    CarritoComponent,
    RegisterUserComponent,
    LoginAdminComponent,
    InicioAdminComponent,
    HeaderAdminComponent,
    ComidasAdminComponent,
    ClientesAdminComponent,
    ModificarPeliculaComponent,
    AgregarPeliculaComponent,
    ModificarComidaComponent,
    AgregarComidaComponent,
    ModificarClienteComponent,
    AgregarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
