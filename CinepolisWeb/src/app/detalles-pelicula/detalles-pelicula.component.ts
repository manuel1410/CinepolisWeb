import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {

  pelicula: any = {
    "deleted": false,
    "precio_normal": 3000,
    "director": "david",
    "actores": [
        "eddie"
    ],
    "precio_adultomayor": 2500,
    "Sala": "Sala 03",
    "idiomas": [
        "español"
    ],
    "duracion": "120",
    "titulo": "animales fantasticos",
    "precio_nino": 2000,
    "edad_min": 12,
    "generos": [
        "aventura"
    ],
    "Hora": "15:00",
    "url": "https://previews.dropbox.com/p/thumb/ABj_Pij_N2SB7PCITxwW-AgZZkO8yGNQc-EiSA6orn37yJeWj-7zVp2-ZQktb6xRc4nSp-910nmWU3ounmNQThfLEzJ0G06n48OS4qJXVLL-tnVgsyhX0yzGeU6CvUb6xTUCglYxviSxTn6RiKXjQAHMVTBBD9furn4U1xn9_594_cuOQ0uNZF3jM-NBOoH3Mc-uoAzVDxyCwsrRb_TApVkwu1VOVX5JTXyrRiXLLYajiZEccjL4Lu6MuDd6BISxTaxNus9fvPcBD6DxLzStaL8UqBQOwtxe-XeOjfY9HKLTEXRUSf2Pd4sup9ueJknUjwAJKYvTqs8CNo0YwJmOCrQ_We5TroB1iQyXg9pfN4Tnp4UVxTgV0w0VDPGHKyrKPiA/p.jpeg",
    "id": "Xn5sNXme1lOhbT0QmPMq",
    "salaFlag": true
};

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    //this.pelicula = this.dataservice.getPeliculaLocal();
  }


  comprarEntradas() {

  }
}
