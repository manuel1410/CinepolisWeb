import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.css']
})
export class ClientesAdminComponent implements OnInit {

  clientes: any;
  constructorFlag: boolean;

  constructor(private dataService: DataService, private router: Router) {
    this.constructorFlag = false;
    this.clientes = [];
    const usuariosRef = this.dataService.getUsuarios();
    usuariosRef.subscribe(res => {
      if(this.constructorFlag == false){
          for(let cliente of res){
            if(this.constructorFlag == false){
              if(cliente.deleted == false){
                this.clientes.push(cliente);
              }
            }
          }
          this.constructorFlag = true;
      }
    });
  }

  ngOnInit() {
  }

  agregarCliente(){
    this.router.navigateByUrl('inicioadmin/clientes/agregarcliente');
  }

  modificar(index){
    this.dataService.setUsuarioLocal(this.clientes[index]);
    this.router.navigateByUrl('inicioadmin/clientes/modificarcliente');
  }

  eliminarCliente(index){
    this.actualizarEliminacionCliente(index);
    this.clientes.splice(index,1);
  }

  actualizarEliminacionCliente(index){
    this.dataService.deleteCliente(this.clientes[index]);
  }

  regresar(){
    this.router.navigateByUrl('inicioadmin');
  }


}