import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detalles-comida',
  templateUrl: './detalles-comida.component.html',
  styleUrls: ['./detalles-comida.component.css']
})
export class DetallesComidaComponent implements OnInit {

  comida: any = {
    "precio": 2000,
    "nombre": "Hotdog",
    "cantidad": 13,
    "deleted": false,
    "tipo": "comida",
    "url": "https://previews.dropbox.com/p/thumb/ABdCSosgj6m9MWz7RwhmDf0kvDzJnJKUajZskRsnje1su_Q7yderVIvr2X4ipg_lFRr_KjWNzqdYhdTvG4U5LwpZUsnHv914PsbPaYWAa3uQGmk6Bj9M74FP3U5lOh5zT_tY3HdSeXKu4CyMfbdFtFQi57y0TWLUFVIiP4Eg8_dRhMHektUNNa9e5wKZqiBuyMpCLj_F9wopyNFFUNvczmplEF7MhIujjxUunAZ9xIm2Iy2zBNIDuYk37v-5hVfJ_jDWoGVdEjZ9jQIdzg_XIu9ZFiIIubkSM2cOa6DmaDLeqNnM6U3IkEV5jUcThJoad9F6IVZ-7e8_Xn0Mak-3Mh5JB4sR94bjaBDaqo9ot6oGl-EP6ibDlWIUt3LrH1sxHX8/p.jpeg",
    "id": "PVdmznEZ1mYeB3gkitBO"
};
  cantidad: any;

  aviso: string;

  constructor(private dataService: DataService, private router: Router) { 
    this.comida = this.dataService.getComidaLocal();
  }

  ngOnInit() {
    console.log(this.comida);
  }

  async agregarCarrito(){
    const cantidadStock = this.comida.cantidad;

    const nombreComida = this.comida.nombre;
    const cantidadSeleccionada = this.cantidad;
    const precioUnitario = this.comida.precio;
    const precioTotal = cantidadSeleccionada*precioUnitario;
    const url = this.comida.url;

    if(cantidadStock == 0){
      this.aviso = 'No se puede agregar al carrito debido a que no hay cantidad disponible.';
    } else if((cantidadSeleccionada <= cantidadStock) && (cantidadSeleccionada > 0)){

      const numRD = Math.floor(Math.random()*10000000000);

      const jsonComidaCarrito = {
        nombre: nombreComida,
        cantidad: cantidadSeleccionada,
        precioUnitario: precioUnitario,
        precioTotal: precioTotal,
        url: url,
        numOrden: numRD
      }
      this.dataService.setComidasCarrito(jsonComidaCarrito);
        console.log('Su compra ha sido añadida con éxito al carrito');
      this.actualizarStock();
      this.router.navigateByUrl('/inicio/comidas');
    } else {
        this.aviso = 'Por favor revise que los datos ingresados sean correctos o que la cantidad sea correcta.';
    }

  }

  actualizarStock(){
    const stock = this.comida.cantidad - this.cantidad;
    this.dataService.updateStock({id: this.comida.id, nombre: this.comida.nombre, tipo: this.comida.tipo, precio: this.comida.precio, url: this.comida.url, deleted: this.comida.deleted, cantidad: stock});
  }

}
