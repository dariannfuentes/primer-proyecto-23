import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environments } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; //importación de firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //importacion autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage';  //importacion storage

//FIREBASE
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; //Importacion firestore
import { AngularFireStorageModule} from "@angular/fire/compat/storage"; //Importacion storage 
import { AngularFireAuthModule} from '@angular/fire/compat/auth'; //Importacion autentificacion

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //importar shared
    SharedModule,
<<<<<<< HEAD
    //Modulos de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule
=======
    //importar firebase
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    
>>>>>>> 55ae6e88ea48852fd72129bc901ee7812a17173b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }