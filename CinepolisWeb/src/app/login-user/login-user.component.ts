import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  emailInput: string;
  passwordInput: string;
  usuario: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {this.dataService.createcarritoLocal();}



  submit(){
    const usuarios = this.dataService.getUsuarios();
    let flag = false;
    usuarios.subscribe(res => {
      for(let item in res){
        if(res[item].correo == this.emailInput && res[item].contrasena == this.passwordInput && res[item].deleted == false){
          this.usuario = res[item];
          this.dataService.setUsuarioLocal(this.usuario);
          flag = true;
          console.log("Inicio de sesión exitoso.");
          this.router.navigateByUrl('inicio');
        }
      }
      if(flag===false)
      console.log("Incio de sesión fallido. Por favor verifique los datos ingresados.");
    });

  }

  admin() {
    this.router.navigateByUrl('loginadmin');
  }

  register() {
    this.router.navigateByUrl('register');
  }

}
