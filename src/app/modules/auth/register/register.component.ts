import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

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
  uid= '';

  //creamos una coleccion para usuarios
  coleccionUsuarios: Usuario[] = []; 

  constructor(public servicioAuth: AuthService, public servicioFirestore: FirestoreService){}

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
    .catch(error => alert("Hubo un error al cargar el usuario: \n"+error));

    const uid = await this.servicioAuth.getUid();

    this.usuarios.uid = uid;

    // GUARDA EL NUEVO
    this.guardarUser();
  };

  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {console.log(this.usuarios)})
    .catch(error => {console.log('Error =>', error)})
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}