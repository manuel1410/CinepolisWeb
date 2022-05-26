import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  peliculas() {
    this.router.navigateByUrl('inicioadmin');
  }

  comidas() {
    this.router.navigateByUrl('inicioadmin/comidas');
  }

  clientes() {
    this.router.navigateByUrl('inicioadmin/clientes');
  }


}
