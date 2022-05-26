import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  inputEmail: any;
  inputCedula: any;
  inputNombre: any;
  inputApellido1: any;
  inputApellido2: any;
  inputFechaNacimiento: any;
  inputVacunas: any;

  aviso: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  regresar(){
    this.router.navigateByUrl('/home', {replaceUrl: true});
  }

  registrar(){
    const cedula = this.inputCedula;
    const email = this.inputEmail;
    const nombre = this.inputNombre;
    const apellido1 = this.inputApellido1;
    const apellido2 = this.inputApellido2;
    const fechaNacimiento = this.inputFechaNacimiento;
    const vacunas = this.inputVacunas;

    if(cedula === undefined || email === undefined || nombre === undefined || apellido1 === undefined || apellido2 === undefined || fechaNacimiento === undefined || vacunas === undefined){

      console.log(typeof(cedula)); 
      console.log(typeof(email)); 
      console.log(typeof(nombre)); 
      console.log(typeof(apellido1)); 
      console.log(typeof(apellido2)); 
      console.log(typeof(fechaNacimiento)); 
      console.log(typeof(vacunas)); 
      this.aviso = 'Rellene todos los campos por favor.'
      return 0;
    }

    this.aviso = '';

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

    this.router.navigateByUrl('');
    return 1;
  }

}
