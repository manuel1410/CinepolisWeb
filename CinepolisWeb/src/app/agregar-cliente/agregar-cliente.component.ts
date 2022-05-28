import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  aviso: string;

  inputEmail: any;
  inputCedula: any;
  inputNombre: any;
  inputApellido1: any;
  inputApellido2: any;
  inputFechaNacimiento: any;
  inputVacunas: any;

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
  }

  async registrar(){
    var cedula = this.inputCedula;
    var email = this.inputEmail;
    var nombre = this.inputNombre;
    var apellido1 = this.inputApellido1;
    var apellido2 = this.inputApellido2;
    var fechaNacimiento = this.inputFechaNacimiento;
    var vacunas = this.inputVacunas;

    if(cedula != undefined &&
      email != undefined &&
      nombre != undefined &&
      apellido1 != undefined &&
      apellido2 != undefined &&
      fechaNacimiento != undefined &&
      vacunas != undefined){

      /*Calculo de la edad*/ 
    const fecNacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    var Edad = hoy.getFullYear() - fecNacimiento.getFullYear();
    var meses = hoy.getMonth() - fecNacimiento.getMonth();
    if (meses < 0 || (meses === 0 && hoy.getDate() < fecNacimiento.getDate())) 
    {
      Edad--;
    }

    const edad = Edad;
    var Password = Math.floor(Math.random() * 1000000);
    while(Password < 100000){
      var Password = Math.floor(Math.random() * 1000000);
    }
    const password = Password.toString();
    
    this.dataService.addUsuario({
      correo: email,
      contrasena: password,
      numeroCedula: cedula,
      nombre: nombre,
      apellido1: apellido1,
      apellido2: apellido2,
      fechaNacimiento: fechaNacimiento,
      edad: edad,
      vacunacion: vacunas,
      deleted: false
    });


    console.log('Se ha registrado el cliente con éxito');


    this.router.navigateByUrl('inicioadmin/clientes');
    } else {
      this.aviso = 'Por favor rellene todos los datos'
    }

  }

  regresar(){
    this.router.navigateByUrl('inicioadmin/clientes');
  }


}

