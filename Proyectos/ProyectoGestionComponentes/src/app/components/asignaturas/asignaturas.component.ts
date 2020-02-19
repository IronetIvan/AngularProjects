import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {


  parametro: string;

  constructor(private rutas: ActivatedRoute, private Servicio:DatosService) { }

  ngOnInit() {

  this.Servicio.getAllAsignaturas;
  this.Servicio.getAllTecnologias;
    
  }
  

}
