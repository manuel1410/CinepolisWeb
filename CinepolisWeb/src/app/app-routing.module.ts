import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path: 'inicioadmin/clientes', component: ClientesAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
