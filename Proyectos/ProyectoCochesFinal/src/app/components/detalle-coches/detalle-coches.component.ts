import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/utils/coche';
import { DatosService } from 'src/app/services/datos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-coches',
  templateUrl: './detalle-coches.component.html',
  styleUrls: ['./detalle-coches.component.css']
})
export class DetalleCochesComponent implements OnInit {
cocheDetalle:Coche[];
coches:Coche[];
  constructor(private servicio:DatosService, private rutas: ActivatedRoute) { }

  ngOnInit(): void {
    this.cocheDetalle= this.servicio.getCocheSelec();
  }

}
