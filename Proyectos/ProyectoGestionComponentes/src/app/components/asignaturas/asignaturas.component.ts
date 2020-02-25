import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { Tecnologia } from '../../utils/tecnologia';
import { Asignatura } from '../../utils/asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {


  parametro: string;
asignaturas: Asignatura[]

  constructor(private rutas: ActivatedRoute, private Servicio:DatosService) { }

  ngOnInit() {

  this.asignaturas=this.Servicio.getAllAsignaturas();
  
    
  }
  

}
