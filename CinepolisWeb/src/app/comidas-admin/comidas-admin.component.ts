import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comidas-admin',
  templateUrl: './comidas-admin.component.html',
  styleUrls: ['./comidas-admin.component.css']
})
export class ComidasAdminComponent implements OnInit {

  filtro_menu: boolean;
  comidasSwitch: boolean;
  combosSwitch: boolean;
  bebidasSwitch: boolean;

  comidas: any;
  comidaGeneral: any; 
  allComidas: any;

  constructorFlag: boolean;

  constructor(private dataService: DataService, private router: Router) {
    this.constructorFlag = false;
    this.filtro_menu = false;
    this.comidasSwitch = true;
    this.combosSwitch = true;
    this.bebidasSwitch = true;
    this.comidas = [];
    this.comidaGeneral = [];

    const comidasRef = this.dataService.getComidas();
    if(this.constructorFlag == false){
      comidasRef.subscribe(res => {
        this.allComidas = res;

        if(this.constructorFlag == false){
          var index = 0;
          for(let comida of this.allComidas){

            if(comida.deleted == false && this.constructorFlag == false){
              this.comidas.push(comida);
              this.comidaGeneral.push(comida);
            }
            index++
          }
          this.dataService.setComidaGeneral(this.comidas);
          this.constructorFlag = true;
        }
      })
    }
   }

  ngOnInit() {
  }

  agregarComida(){
    this.router.navigateByUrl('inicioadmin/comidas/agregarcomida');
  }

  modificar(index){
    this.dataService.setComidaLocal(this.comidas[index]);
    this.router.navigateByUrl('inicioadmin/comidas/modificarcomida');
  }

  filtrar() {
    this.filtro_menu = true;
  }

  devolverseFiltros() {
    this.dataService.setComidaFiltrada(this.allComidas, this.comidasSwitch, this.bebidasSwitch, this.combosSwitch);
    this.comidas = this.dataService.getComidaFiltrada();
    this.filtro_menu = false;
  }

  eliminarComida(index){
    this.actualizarEliminacionComida(index);
    this.comidas.splice(index,1);
  }
  actualizarEliminacionComida(index){
    this.dataService.deleteComida(this.comidas[index]);
  }

  regresar(){
    this.router.navigateByUrl('inicioadmin');
  }

}