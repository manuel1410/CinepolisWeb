import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritoLocal: any;
  carritoArrayPeliculas: Array<any>;
  carritoArrayComidas: Array<any>;
  itemsFlag: boolean;
  salaActualizar: any;
  salaItemCarrito: any;

  comidaItemCarrito: any;

  salas: any;
  comidas: any;

  constructor(private dataService: DataService, private router: Router) { 
    this.carritoLocal = this.dataService.getCarritoLocal();
    this.carritoArrayPeliculas = [];
    this.carritoArrayComidas = [];

    console.log(this.carritoLocal);


    const salaRef = this.dataService.getSalas();
    salaRef.subscribe(res => {
      this.salas = res;
    });

    const comidasRef = this.dataService.getComidas();
    comidasRef.subscribe(res => {
      this.comidas = res;
    })

    /*
    this.carritoArrayPeliculas = [{
      nombre: "SAO: Progressive-Aria de noche sin estrellas",
      sala: "Sala 01",
      hora: "12:20",
      cantidadEntradas: 1,
      cantidadNinos: 0,
      cantidadAdultos: 1,
      cantidadAdultosMayores: 0,
      precioNinosTotal: 0,
      precioAdultosTotal: 2900,
      precioAdultosMayoresTotal: 0,
      precioTotal: 2900,
      numAsientos: "0  ",
      url: "https://previews.dropbox.com/p/thumb/ABhonkc5V0ItT7R49L8RtNn7TEkNKLnZYL4iYEFvoTcMYJf9hNc0VynzmWrFeDAVqJhB24G-F5Iu0FMdMa5CbCVrky2yQ1VKc0OeeSTU2_RnvlV_ggE8ZePOwrMe_E_L7doPYmOloYRGzQb1eBmbl91FNtQ1MdnIRvxym9GQCuRFnMSxr-ee6hz4A6a8e0EuOttcZU9lIyeZZ2lBj4PaRz5jR14sObk_KfZwfWXqco684uQuIJD4FN5kaRb36pUQyj0O8ye1DPV1_-5YCICBGU5IaQprIbGTqJ8ZLnZ57RAgNu5cqkasSOb1FNGekhWleIgTlPtM8gRMs8VJYIALwK_M64hfP-p8fsMXm7PTJNG4r1LL_RMwF2SpEQ1Db0bZBv8/p.jpeg"
  }]

  this.carritoArrayComidas = [{
    nombre: "Papas fritas",
    cantidad: 2,
    precioUnitario: 1000,
    precioTotal: 2000,
    url: "https://previews.dropbox.com/p/thumb/ABiSm3XAVZAfUSUD7DPc9Jghy-8EdHBjAzBTZRsyI7uZa6VyVgcFuo-oP-lCjNfFF2jkgURy80oeybrXo-IK7k6fo18oDknmfp0vSB6gDe7WUtmohUEb_-UZX7e65eqU7ZRv0W0qMZb_-xANMUQNnfnxju017-XYsJJL1P6XCxXdcNCIgVnc3GDGPmdiStaO7M31dzmvlCI2lmkJwVXyxyfwMxwnFem-fqaX7yW8PQy-qZkZZK3pTLpHhU0Ldpsq0_HkAFCSQYn4Grkl19vadcXl-rPX3hYg_8-wmeWmTyIslIz99aheVo62GleqJshTuUDySMzMZ8p7yujICNe-rWtuHIt_OZbTBIj05-f-vU_gYOwGZk01_TSGYu_y6x6T-N0/p.jpeg"
  }]
  */
  
  

    
    if(this.carritoLocal){

      for(let elemento of this.carritoLocal.sala01){
        this.carritoArrayPeliculas.push(elemento);
      }
      for(let elemento of this.carritoLocal.sala02){
        this.carritoArrayPeliculas.push(elemento);
      }
      for(let elemento of this.carritoLocal.sala03){
        this.carritoArrayPeliculas.push(elemento);
      }
      for(let elemento of this.carritoLocal.comidas){
        this.carritoArrayComidas.push(elemento);
      }
    }

    if(this.carritoArrayPeliculas.length == 0 && this.carritoArrayComidas.length == 0){
      this.itemsFlag = true;
    }
    else{
      this.itemsFlag = false;
    }
    
  }

  ngOnInit() {
  }

  eliminarPelicula(index){
    const pelicula = this.carritoArrayPeliculas[index];
    const arrayAsientos = pelicula.numAsientosArray;
    const nombreSala = pelicula.sala;

    for(let sala of this.salas){
      if(sala.nombre == pelicula.sala){
        for(let asiento of arrayAsientos){
          if(sala.asientos[asiento-1].reservado == true){
            sala.asientos[asiento-1].reservado = false;
          }
        }
        this.dataService.updateReservas(sala);
      }
    }

    if(this.carritoArrayPeliculas.length == 1 && this.carritoArrayComidas.length == 0){
      this.itemsFlag = true;
    }
    else{
      this.itemsFlag = false;
    }
    this.carritoArrayPeliculas.splice(index,1); /*ELIMINAR ITEM DE LA INTERFAZ*/

    /*ELIMINAR PELICULA DEL CARRITO LOCAL*/

    if(nombreSala == "Sala 01"){
      var i = 0;
      for(let ordenSala of this.carritoLocal.sala01){
        if(ordenSala.numAsientosArray == arrayAsientos){
          this.carritoLocal.sala01.splice(i, 1);
        }
        i++;
      }
    }
    else if(nombreSala == "Sala 02"){
      var i = 0;
      for(let ordenSala of this.carritoLocal.sala02){
        if(ordenSala.numAsientosArray == arrayAsientos){
          this.carritoLocal.sala02.splice(i, 1);
        }
        i++;
      }
    }
    else if(nombreSala == "Sala 03"){
      var i = 0;
      for(let ordenSala of this.carritoLocal.sala03){
        if(ordenSala.numAsientosArray == arrayAsientos){
          this.carritoLocal.sala03.splice(i, 1);
        }
        i++;
      }
    }
    this.dataService.setCarritoLocal(this.carritoLocal);
  }

  eliminarComida(index){

    const comidaItem = this.carritoArrayComidas[index];
    const numOrdenFunc = comidaItem.numOrden;
    const cantidadComida = comidaItem.cantidad;

    for(let comida of this.comidas){
      if(comida.nombre == comidaItem.nombre){
        comida.cantidad = comida.cantidad+comidaItem.cantidad;
        this.dataService.updateStock(comida);
      }
    }

    if(this.carritoArrayPeliculas.length == 0 && this.carritoArrayComidas.length == 1){
      this.itemsFlag = true;
    }
    else{
      this.itemsFlag = false;
    }
    this.carritoArrayComidas.splice(index,1); /*ELIMINAR ITEM DE LA INTERFAZ*/

    /*ELIMINAR COMIDA DEL CARRITO LOCAL*/

    var i = 0;
      for(let ordenComida of this.carritoLocal.comidas){
        if(ordenComida.numOrden == numOrdenFunc){
          this.carritoLocal.comidas.splice(i, 1);
        }
        i++;
      }
    this.dataService.setCarritoLocal(this.carritoLocal);
  }

  limpiarCarrito() {
    var i = 0;
    for(let orden of this.carritoArrayPeliculas){
      this.eliminarPelicula(i);
      i++;
    }
    i = 0;
    for(let orden of this.carritoArrayComidas){
      this.eliminarComida(i);
      i++;
    }

  }

  async confirmarCarrito() {
    this.carritoLocal = this.dataService.getCarritoLocal();
    this.dataService.addCarrito(this.carritoLocal);

    /*ENVIAR POR CORREO EL PDF*/ 

    this.dataService.createcarritoLocal();
    this.dataService.setCarritoLocalUsuario();


    this.router.navigateByUrl('/inicio', { replaceUrl: true});

  }

  regresar() {
    this.router.navigateByUrl('/inicio', { replaceUrl: true});
  }

}

