import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comidas-user',
  templateUrl: './comidas-user.component.html',
  styleUrls: ['./comidas-user.component.css']
})
export class ComidasUserComponent implements OnInit {

  comidas: any;
  comidaGeneral: any;
  filtro_menu: boolean;
  comidasSwitch: boolean;
  bebidasSwitch: boolean;
  combosSwitch: boolean;


  constructor(private dataService: DataService, private router: Router) { 
    this.filtro_menu = false;
    this.comidasSwitch = true;
    this.combosSwitch = true;
    this.bebidasSwitch = true;

    const comidasRef = this.dataService.getComidas();
    comidasRef.subscribe(res => {
      this.comidas = res;
      this.comidaGeneral = res;
      this.dataService.setComidaGeneral(res);
    })
  }

  ngOnInit() {
  }


  detallesComida(item) {
    this.dataService.setComidaLocal(item);
    this.router.navigateByUrl('inicio/comidas/detallescomida');

  }

  carrito() {
    this.router.navigateByUrl('inicio/carrito');
  }

  filtrar() {
    this.filtro_menu = true;
  }

  devolverseFiltros() {
    this.dataService.setComidaFiltrada(this.comidaGeneral, this.comidasSwitch, this.bebidasSwitch, this.combosSwitch);
    this.comidas = this.dataService.getComidaFiltrada();
    this.filtro_menu = false;
  }

  regresar() {
    this.router.navigateByUrl('inicio');
  }
}