import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comprar-entradas',
  templateUrl: './comprar-entradas.component.html',
  styleUrls: ['./comprar-entradas.component.css']
})
export class ComprarEntradasComponent implements OnInit {

  pelicula: any = {
    "Hora": "15:00",
    "generos": [
        "aventura"
    ],
    "salaFlag": true,
    "idiomas": [
        "español"
    ],
    "deleted": false,
    "Sala": "Sala 03",
    "actores": [
        "eddie"
    ],
    "url": "https://previews.dropbox.com/p/thumb/ABj_Pij_N2SB7PCITxwW-AgZZkO8yGNQc-EiSA6orn37yJeWj-7zVp2-ZQktb6xRc4nSp-910nmWU3ounmNQThfLEzJ0G06n48OS4qJXVLL-tnVgsyhX0yzGeU6CvUb6xTUCglYxviSxTn6RiKXjQAHMVTBBD9furn4U1xn9_594_cuOQ0uNZF3jM-NBOoH3Mc-uoAzVDxyCwsrRb_TApVkwu1VOVX5JTXyrRiXLLYajiZEccjL4Lu6MuDd6BISxTaxNus9fvPcBD6DxLzStaL8UqBQOwtxe-XeOjfY9HKLTEXRUSf2Pd4sup9ueJknUjwAJKYvTqs8CNo0YwJmOCrQ_We5TroB1iQyXg9pfN4Tnp4UVxTgV0w0VDPGHKyrKPiA/p.jpeg",
    "director": "david",
    "id": "Xn5sNXme1lOhbT0QmPMq",
    "precio_normal": 3000,
    "edad_min": 12,
    "titulo": "animales fantasticos",
    "duracion": "120",
    "precio_adultomayor": 2500,
    "precio_nino": 2000
};


  cantidadAdultosMayores: any;
  cantidadAdultos: any;
  cantidadNinos: any;
  salas: any;
  sala: any;
  salaLocal: any;
  colorsArray: Array<any>;

  selectedItem: any;
  aviso: string;

  constructor(private dataService: DataService, private router: Router) {
    this.colorsArray = [];
    //this.pelicula = this.dataService.getPeliculaLocal();
    console.log(this.pelicula);
    const salaRef = this.dataService.getSalas();

    this.salaLocal = this.dataService.getSalaLocal();

    salaRef.subscribe(res => {
      this.salas = res;

      for(let sala of this.salas){
        if(sala.pelicula == this.pelicula.titulo){
          this.dataService.setSalaLocal(sala);
          this.sala = this.dataService.getSalaLocal();
          let i = 0;
          for(let asiento of sala.asientos){
            if(asiento.reservado == false){
              this.colorsArray[i]='grey';
            }
            else if(asiento.reservado == true){
              this.colorsArray[i]='#921313';
            }
            i++;
          }
          console.log(this.colorsArray)
          //this.dataService.createMatrizAsientos(this.sala);
        }
      }
    })

   }

  ngOnInit() {
  }

  async entradasCarrito() {

    console.log('entró');
    var i = 0;
    var j = 1;

    let indicesArray = [];
    for(let asiento of this.colorsArray){
      if(asiento == '#027502'){
        indicesArray.push(j);
        i++;
      }
      j++;
    }

    var cantidadNinos;

    const nombrePelicula = this.pelicula.titulo;
    const salaPelicula = this.sala.nombre;
    const horaPelicula = this.sala.hora;
    const cantidadAsientos = i;

    if(this.cantidadNinos != undefined){
      cantidadNinos = this.cantidadNinos;
    }
    else {
      cantidadNinos = 0;
    }
    
    const cantidadAdultos = this.cantidadAdultos;
    const cantidadAdultosMayores = this.cantidadAdultosMayores;
    const precioNinosTotal = cantidadNinos*this.pelicula.precio_nino;
    const precioAdultosTotal = cantidadAdultos*this.pelicula.precio_normal;
    const precioAdultosMayoresTotal = cantidadAdultosMayores*this.pelicula.precio_adultomayor;
    const precioTotal = precioNinosTotal+precioAdultosTotal+precioAdultosMayoresTotal;
    const url = this.pelicula.url;

    var stringAsientos = "";
    for(let asiento of indicesArray){
      var numAsiento = asiento.toString();
      stringAsientos = stringAsientos + numAsiento + "  ";
    }

    const numAsientos = stringAsientos;

    const jsonCompraEntradas = {

      nombre: nombrePelicula,
      sala: salaPelicula,
      hora: horaPelicula,
      cantidadEntradas: cantidadAsientos,
      cantidadNinos: cantidadNinos,
      cantidadAdultos: cantidadAdultos,
      cantidadAdultosMayores: cantidadAdultosMayores,
      precioNinosTotal: precioNinosTotal,
      precioAdultosTotal: precioAdultosTotal,
      precioAdultosMayoresTotal: precioAdultosMayoresTotal,
      precioTotal: precioTotal,
      numAsientos: numAsientos,
      numAsientosArray: indicesArray,
      url: url


    }

    if(this.sala.nombre == 'Sala 01'){
      this.dataService.setSala01Carrito(jsonCompraEntradas);
    }
    else if(this.sala.nombre == 'Sala 02'){
      this.dataService.setSala02Carrito(jsonCompraEntradas);
    }
    else if(this.sala.nombre == 'Sala 03'){
      this.dataService.setSala03Carrito(jsonCompraEntradas);
    }
    this.actualizarCampos();
    this.router.navigateByUrl('/inicio');
  }

  async validarEntradas() {

    const usuario = this.dataService.getUsuarioLocal();

    if(usuario.vacunacion == 0){
      return this.mensajeVacunas();
    } 
    else if(usuario.edad < this.pelicula.edad_min){
      return this.mensajeEdad();
    }

    var i = 0;

    for(let asiento of this.colorsArray){
      if(asiento == '#027502'){
        i++;
      }
    }

    

    const contadorAsientos = i;

    if(this.pelicula.edad_min < 18){

      if((contadorAsientos == (this.cantidadNinos + this.cantidadAdultos + this.cantidadAdultosMayores)) && contadorAsientos <= this.sala.cantidad_asientos){
        /*AÑADIR AL CARRITO*/
        this.entradasCarrito();
      }else {
        this.aviso = 'Seleccione bien la cantidad de asientos de todos los tipos'
      }
      
    } 
    else if(this.pelicula.edad_min >= 18){

      if((contadorAsientos == (this.cantidadAdultos + this.cantidadAdultosMayores)) && contadorAsientos <= this.sala.cantidad_asientos){
        /*AÑADIR AL CARRITO*/
        this.entradasCarrito();
      }else {
        this.aviso = 'Seleccione bien la cantidad de asientos de todos los tipos'
      }

    } 

  }

  actualizarCampos() {
    let i = 0;
    var matrizAsientos = [];
    const usuario = this.dataService.getUsuarioLocal();
    for(let asiento of this.colorsArray){
      if(asiento == '#027502'){
        var jsonAsiento = {id: i, num_asiento: i+1, reservado: true, persona: ""};
        matrizAsientos.push(jsonAsiento);
      }
      else if(asiento == '#921313'){
        var jsonAsiento_aux = {id: i, num_asiento: i+1, reservado: true, persona: ""};
        matrizAsientos.push(jsonAsiento_aux);
      }
      else if(asiento == 'grey'){
        var jsonAsiento_aux_ = {id: i, num_asiento: i+1, reservado: false, persona: ""};
        matrizAsientos.push(jsonAsiento_aux_);
      }
      i++;
    }

    this.dataService.updateReservas({id: this.sala.id, nombre: this.sala.nombre, pelicula: this.sala.pelicula, hora: this.sala.hora, deleted: this.sala.deleted, cantidad_asientos: this.sala.cantidad_asientos, asientos: matrizAsientos});

  }

  cambiarColor(index) {
    if(this.colorsArray[index]=="#921313"){
      console.log('No se puede reservar el asiento: ', index+1);
    }
    else if(this.colorsArray[index]=="grey"){
      this.colorsArray[index]='#027502';
    } else if(this.colorsArray[index]=="#027502"){
      this.colorsArray[index]='grey';
    }
  }

  regresar() {
    this.router.navigateByUrl('/detalles-pelicula', { replaceUrl: true});
  }

  mensajeVacunas() {
    this.aviso = 'No cuenta con el esquema de vacunación completo'
  }

  mensajeEdad() {
    this.aviso = 'No cuenta con la edad requerida para comprar entradas a esta función'
  }

}