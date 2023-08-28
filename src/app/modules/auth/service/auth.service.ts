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
    // retorna nuevo valor de nombre y contrasena
    return this.auth.createUserWithEmailAndPassword(nombre, contrasena)
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
}