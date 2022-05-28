import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-modificar-comida',
  templateUrl: './modificar-comida.component.html',
  styleUrls: ['./modificar-comida.component.css']
})
export class ModificarComidaComponent implements OnInit {

  aviso: string;

  comida: any;

  inputArticulo: any;
  inputTipo: any;
  inputPrecio: any;
  inputCantidad: any;
  inputImagen: any;

  constructor(private dataService: DataService, private router: Router) { 

    this.comida = this.dataService.getComidaLocal();
  }

  ngOnInit() {
  }


  async modificar(){

    var nombre = this.inputArticulo;
    var tipo = this.inputTipo;
    var precio = this.inputPrecio;
    var cantidad = this.inputCantidad;
    var url = this.inputImagen;

    if(nombre == undefined){
      nombre = this.comida.nombre;
    }
    if(tipo == undefined){
      tipo = this.comida.tipo;
    }
    if(precio == undefined){
      precio = this.comida.precio;
    }
    if(cantidad == undefined){
      cantidad = this.comida.cantidad;
    }
    if(url == undefined){
      url = this.comida.url;
    }

    const jsonComida = {
      id: this.comida.id,
      cantidad: cantidad,
      deleted: false,
      nombre: nombre,
      precio: precio,
      tipo: tipo,
      url: url
    }

    this.dataService.updateComida(jsonComida);

    console.log('Se registró correctamente');
    this.router.navigateByUrl('/inicioadmin/comidas');

  }



  regresar(){
    this.router.navigateByUrl('/inicioadmin/comidas');
  }

}
