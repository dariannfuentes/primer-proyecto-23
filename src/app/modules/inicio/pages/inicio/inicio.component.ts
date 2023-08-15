import { Component } from '@angular/core';
import { TarjetaInicio } from 'src/app/models/modelos' 
import { Gatos } from 'src/app/models/gatos';

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
      }
    ]
  }

  ngOnInit(): void{}
}
