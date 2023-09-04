import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../service/auth.service'; //funcion iniciar sesion
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/shared/services/firestore.service'; //navegacion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide=true;

  constructor(public servicioAuth: AuthService, public firestore: FirestoreService, public router: Router){}

  usuarios: Usuario = {
    uid: '',
    email: '',
    nombre: '',
    contrasena: '',
    rol: ''
  }

  async iniciar(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    .then(res => {
      alert("Se ha logeado con exito");

      this.router.navigate(['/inicio'])
    })
    .catch(error => {
      alert('Error al iniciar sesion: ( \n +'+error);
    })
  }

}
