import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  peliculas() {
    this.router.navigateByUrl('inicio');
  }

  comidas() {
    this.router.navigateByUrl('inicio/comidas');
  }

  carrito() {
    this.router.navigateByUrl('inicio/carrito');
  }

}
