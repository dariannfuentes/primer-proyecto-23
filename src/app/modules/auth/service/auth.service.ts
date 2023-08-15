import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciamos Auth de firebase
  constructor(public auth: AngularFireAuth) { }

  registrar(nombre: string, contrasena: string){
    return this.auth.createUserWithEmailAndPassword(nombre, contrasena)
  }
}