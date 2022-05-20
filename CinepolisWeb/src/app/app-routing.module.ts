import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidasUserComponent } from './comidas-user/comidas-user.component';
import { ComprarEntradasComponent } from './comprar-entradas/comprar-entradas.component';
import { DetallesComidaComponent } from './detalles-comida/detalles-comida.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { InicioUserComponent } from './inicio-user/inicio-user.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  {path: '', component: LoginUserComponent},
  {path: 'inicio', component: InicioUserComponent},
  {path: 'inicio/detallespelicula', component: DetallesPeliculaComponent},
  {path: 'inicio/detallespelicula/reservar', component: ComprarEntradasComponent},
  {path: 'inicio/comidas', component: ComidasUserComponent},
  {path: 'inicio/comidas/detallescomida', component: DetallesComidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
