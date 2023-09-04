export interface Usuario {
    uid: string | any;  //id para auth de firebase
    email: string;
    rol: string;
    nombre: string;
    contrasena: string;
}