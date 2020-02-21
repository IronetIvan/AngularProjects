import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  parametro:string;
  miArray:string[];
  constructor(private rutas: ActivatedRoute, private Servicio:DatosService) { }

  ngOnInit() {

    this.parametro = this.rutas.snapshot.params['parametro'];
    console.log(`Elemento pasado por parametros ${this.parametro}`);
    this.miArray= this.Servicio.getArrayDos();
  }

}
