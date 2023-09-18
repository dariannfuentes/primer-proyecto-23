import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciamos Auth de firebase
  constructor(public auth: AngularFireAuth) { }

  //funcion para login
  iniciarSesion(email: string,contrasena: string){
    //funcion que valida email y contrasena en la BD
    return this.auth.signInWithEmailAndPassword(email, contrasena);
  }

    //funcion para registrarse
  registrar(email: string, contrasena: string){
    // retorna nuevo valor de nombre y contrasena
    return this.auth.createUserWithEmailAndPassword(email, contrasena)
  }

  // FUNCION PARA TOMAR UID
  async getUid(){
    // nos genera una promesa y 'user' la captura
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }

  cerrarSesion(){
    //devuelve un promesa vacia
    return this.auth.signOut();
  }
}