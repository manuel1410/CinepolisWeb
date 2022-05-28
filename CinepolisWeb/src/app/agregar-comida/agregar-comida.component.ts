import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agregar-comida',
  templateUrl: './agregar-comida.component.html',
  styleUrls: ['./agregar-comida.component.css']
})
export class AgregarComidaComponent implements OnInit {

  comida: any;

  aviso: string;

  inputArticulo: any;
  inputTipo: any;
  inputPrecio: any;
  inputCantidad: any;
  inputImagen: any;

  constructor(private dataService: DataService, private router: Router) {
   }

  ngOnInit() {
  }

  async agregar(){

    const nombre = this.inputArticulo;
    const tipo = this.inputTipo;
    const precio = this.inputPrecio;
    const cantidad = this.inputCantidad;
    const url = this.inputImagen;

    if(nombre != undefined &&
      tipo != undefined &&
      precio != undefined &&
      cantidad != undefined &&
      url != undefined){

        const jsonComida = {
          nombre: nombre,
          precio: precio,
          tipo: tipo,
          url: url,
          cantidad: cantidad,
          deleted: false
        }

        this.dataService.addComida(jsonComida);

        this.aviso = '';

        console.log('Comida insertada');

        this.router.navigateByUrl('inicioadmin/comidas');



    }else {
      this.aviso = 'Por favor rellene todo los datos';
    }
  }


  regresar(){
    this.router.navigateByUrl('/alimentos-menu-admin', { replaceUrl: true});
  }

}
