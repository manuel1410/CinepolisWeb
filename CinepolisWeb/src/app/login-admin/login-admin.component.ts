import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  inputEmail: any;
  inputPassword: any;
  admin: any;


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  adminUser() {
    this.router.navigateByUrl('/incioadmin');
  }

  login() {
    const admins = this.dataService.getAdmins();

    this.login_aux(admins).then(res => {
      if(this.admin){
        this.dataService.setAdminLocal(this.admin);
        console.log("Inicio de sesión exitoso.");
        this.router.navigateByUrl('/inicioadmin');
        return this.admin;
      }
      else {
        console.log("Incio de sesión fallido. Por favor verifique los datos ingresados.");
      }
    }).catch(err => {console.log("Error")});

  }

  async login_aux(admins){
    await admins.subscribe(res => {
      for(let item in res){
        if(res[item].correo == this.inputEmail && res[item].contrasena == this.inputPassword){
          this.admin = res[item];
          return this.admin;
        }
      }
    });
  }

  user() {
    this.router.navigateByUrl('');
  }
}
