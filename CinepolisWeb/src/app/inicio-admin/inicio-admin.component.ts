import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent implements OnInit {

  allPeliculas: any;
  peliculas: Array<any>;
  pelicula: any;
  constructorFlag: boolean;

  constructor(private dataService: DataService, private router: Router) {
    this.constructorFlag = false; 
    //console.log('constructor');
    const peliculasRef = this.dataService.getPeliculas();
    this.peliculas = [];
    if(this.constructorFlag == false){
      peliculasRef.subscribe(res => {
        this.allPeliculas = res;
        //console.log(this.allPeliculas);
        if(this.constructorFlag == false){
          for(let pelicula of this.allPeliculas){
            //console.log(pelicula);
            if(pelicula.deleted == false && this.constructorFlag == false){
              this.peliculas.push(pelicula);
            }
          }
          this.constructorFlag = true;
        }
        
      })
    }
  }

  ngOnInit() {
  }

  modificar(index){
    this.dataService.setPeliculaLocal(this.peliculas[index]);
    this.router.navigateByUrl('/inicioadmin/modificarpelicula');
  }

  agregarPelicula(){
    this.router.navigateByUrl('/inicioadmin/agregarpelicula');
  }

  clientes(){
    this.router.navigateByUrl('/inicioadmin/clientes');
  }

  alimentos(){
    this.router.navigateByUrl('/incioadmin/comidas');
  }

  eliminarPelicula(index){
    this.actualizarEliminacionPelicula(index);
    this.peliculas.splice(index,1);
  }

  actualizarEliminacionPelicula(index){
    this.dataService.deletePelicula(this.peliculas[index]);
  }

  regresar(){
    this.router.navigateByUrl('/adminlogin');
  }
}
