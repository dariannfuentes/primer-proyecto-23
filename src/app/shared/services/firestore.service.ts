import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  // dentro de los parametros de la BD
  constructor(private database: AngularFirestore) {
    // referenciamos coleccion de la BD
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }

  agregarUsuario(usuario: Usuario, id: string){
    // resolve: promesa resuelta
    // reject: promesa rechazada
    return new Promise(async(resolve, reject) => {
      try{
        usuario.uid = id;

        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado)
      }catch(error){
        reject(error)
      }
    })
  };
}