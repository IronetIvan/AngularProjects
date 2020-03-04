import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/utils/coche';
import { DatosService } from 'src/app/services/datos.service';
import { ActivatedRoute } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { __param } from 'tslib';

@Component({
  selector: 'app-detalle-coches',
  templateUrl: './detalle-coches.component.html',
  styleUrls: ['./detalle-coches.component.css']
})
export class DetalleCochesComponent implements OnInit {

 coches:Coche[]
  private unCoche:Coche[]
  constructor(private servicio:DatosService, private rutaActiva: ActivatedRoute) { }


  ngOnInit() {
    this.rutaActiva.params.subscribe(param=>{
      this.unCoche= this.servicio.getModelo(param.getModelo)
    })
  }

}
