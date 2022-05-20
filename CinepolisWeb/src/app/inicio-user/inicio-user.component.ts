import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inicio-user',
  templateUrl: './inicio-user.component.html',
  styleUrls: ['./inicio-user.component.css']
})
export class InicioUserComponent implements OnInit {

  allPeliculas: any;
  peliculas: Array<any>;
  pelicula: any;

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataservice.setCarritoLocalUsuario();
    const peliculasRef = this.dataservice.getPeliculas();
    this.peliculas = [];
    peliculasRef.subscribe(res => {
      this.allPeliculas = res;
      for(let pelicula of this.allPeliculas){
        if(pelicula.salaFlag == true && pelicula.deleted == false){
          this.peliculas.push(pelicula);
        }
      }
    })
  }

  detallesPelicula(item) {
    this.dataservice.setPeliculaLocal(item);
    this.router.navigateByUrl('inicio/detallespelicula');
  }

}
