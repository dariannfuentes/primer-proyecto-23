import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide=true

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: ''
  }

  constructor(public servicioAuth: AuthService){}

  //tomamos nuevos registros y mostramos los resultados
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    }

    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    //el metodo THEN nos devuelve el mismo valor que guarda la promesa
    .then(res => {alert("Ha agregado un nuevo usuario con exito")})
    //el metodo CATCH creara un error en caso de que las cosas salgan mal
    .catch(error => alert("Hubo un error al cargar el usuario: \n"+error))

    console.log(res)
  };
}