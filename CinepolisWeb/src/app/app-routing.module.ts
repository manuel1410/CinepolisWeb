import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { InicioUserComponent } from './inicio-user/inicio-user.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  {path: '', component: LoginUserComponent},
  {path: 'inicio', component: InicioUserComponent},
  {path: 'inicio/detalles', component: DetallesPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
