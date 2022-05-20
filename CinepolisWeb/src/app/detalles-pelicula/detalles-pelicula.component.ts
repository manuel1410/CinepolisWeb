import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {

  pelicula: any;
  
  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.pelicula = this.dataservice.getPeliculaLocal();
  }


  comprarEntradas() {
    this.router.navigateByUrl('inicio/detallespelicula/reservar');
  }
}
