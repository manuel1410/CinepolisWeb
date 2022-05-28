import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AgregarComidaComponent } from './agregar-comida/agregar-comida.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { ComidasAdminComponent } from './comidas-admin/comidas-admin.component';
import { ComidasUserComponent } from './comidas-user/comidas-user.component';
import { ComprarEntradasComponent } from './comprar-entradas/comprar-entradas.component';
import { DetallesComidaComponent } from './detalles-comida/detalles-comida.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { InicioUserComponent } from './inicio-user/inicio-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { ModificarComidaComponent } from './modificar-comida/modificar-comida.component';
import { ModificarPeliculaComponent } from './modificar-pelicula/modificar-pelicula.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: '', component: LoginUserComponent},
  {path: 'inicio', component: InicioUserComponent},
  {path: 'inicio/detallespelicula', component: DetallesPeliculaComponent},
  {path: 'inicio/detallespelicula/reservar', component: ComprarEntradasComponent},
  {path: 'inicio/comidas', component: ComidasUserComponent},
  {path: 'inicio/comidas/detallescomida', component: DetallesComidaComponent},
  {path: 'inicio/carrito', component: CarritoComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'loginadmin', component: LoginAdminComponent},
  {path: 'inicioadmin', component: InicioAdminComponent},
  {path: 'inicioadmin/comidas', component: ComidasAdminComponent},
  {path: 'inicioadmin/clientes', component: ClientesAdminComponent},
  {path: 'inicioadmin/modificarpelicula', component: ModificarPeliculaComponent},
  {path: 'inicioadmin/agregarpelicula', component: AgregarPeliculaComponent},
  {path: 'inicioadmin/comidas/modificarcomida', component: ModificarComidaComponent},
  {path: 'inicioadmin/comidas/agregarcomida', component: AgregarComidaComponent},
  {path: 'inicioadmin/clientes/modificarcliente', component: ModificarClienteComponent},
  {path: 'inicioadmin/clientes/agregarcliente', component: AgregarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
