import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { Tecnologia } from '../../utils/tecnologia';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  parametro: string;
  tecnologias: Tecnologia[]

  constructor(private rutas: ActivatedRoute, private Servicio: DatosService) { }

  ngOnInit() {

    this.tecnologias=this.Servicio.getAllTecnologias();
    console.log(this.tecnologias);
    console.log("sdkjshjkdh");
    
    
  }

}
