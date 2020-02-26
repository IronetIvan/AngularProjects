import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/utils/tecnologia';
import { DatosService } from 'src/app/services/datos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  parametro: string;
  tecnologias: Tecnologia[]

  constructor(private rutas: ActivatedRoute, private Servicio: DatosService) { }

  ngOnInit() {
this.tecnologias= this.Servicio.getAllTecnologias();

   
  }

}
