import { Component } from '@angular/core';
<<<<<<< HEAD
import { TarjetaInicio } from 'src/app/models/modelos' 
import { Gatos } from 'src/app/models/gatos';
=======
import { TarjetaInicio } from 'src/app/models/cartas';
>>>>>>> 55ae6e88ea48852fd72129bc901ee7812a17173b

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //Propiedad publica 
  public info: Gatos[];
  //Inicializa la propiead info 
  constructor() {
    this.info = [
      {
<<<<<<< HEAD
        raza: "Siames",
        color: "Blanco con extremidades negras",
        imagen: "https://t1.ea.ltmcdn.com/es/razas/9/7/1/siames_179_0_300_square.webp",
        edadpromedio:"15 años"
      },{
        raza:"Kurilian Bobtail",
        color: "Marron con rayas",
        imagen: "https://t2.ea.ltmcdn.com/es/razas/6/2/8/gato-kurilian-bobtail_826_0_300_square.webp",
        edadpromedio: "16 años"
      },{
        raza:"Don Sphynx",
        color: "Gris sin pelo",
        imagen: "https://t1.ea.ltmcdn.com/es/razas/0/5/8/gato-don-sphynx-o-donskoy_850_0_300_square.webp",
        edadpromedio:"18 años"
=======
        id:1,
        title: "Ninetails V",
        descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus praesentium nisi hic ratione asperiores omnis! Dolor sed nobis saepe nihil iusto quibusdam laborum tempora ipsam, blanditiis incidunt odio ea quae!",
        imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/c/c4/latest/20200501123520/Ninetales_V_%28Choque_Rebelde_26_TCG%29.png",
        alt: "",
        rareza:"",
        valor:"",
      },
      {
        id:2,
        title: "Eternatus VMax",
        descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus praesentium nisi hic ratione asperiores omnis! Dolor sed nobis saepe nihil iusto quibusdam laborum tempora ipsam, blanditiis incidunt odio ea quae!",
        imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/4/4b/latest/20200806115325/Eternatus_VMAX_%28Oscuridad_Incandescente_117_TCG%29.png",
        alt: "",
        rareza:"",
        valor:"",
      },
      {
        id:3,
        title: "Mewtwo Colección Clasica",
        descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus praesentium nisi hic ratione asperiores omnis! Dolor sed nobis saepe nihil iusto quibusdam laborum tempora ipsam, blanditiis incidunt odio ea quae!",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQle-6pz_-IaW61ah__TRJ0bBd_e8J0oBanoQ&usqp=CAU",
        alt: "",
        rareza:"",
        valor:"",
>>>>>>> 55ae6e88ea48852fd72129bc901ee7812a17173b
      }
    ]
  }

  ngOnInit(): void{}
}
