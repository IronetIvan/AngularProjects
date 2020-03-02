import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Marca} from 'src/app/utils/marca';
import { Coche } from 'src/app/utils/coche';
import { ActivatedRoute } from '@angular/router';
import { DetalleCochesComponent } from '../detalle-coches/detalle-coches.component';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coches:Coche[];
  parametro:string[];
  cochesDetalle:Coche[];

  constructor(private servicio:DatosService, private rutas:ActivatedRoute) { }

  ngOnInit() {
    this.coches= this.servicio.getAllCoches()
    this.rutas.params.subscribe(param =>{
      console.log(param);
      
    });
    this.cochesDetalle= this.servicio.getCocheSelec();
    //this.coches = this.servicio.getArrayCoches()
  }

  clickDetalles(){
    alert('hola has pulsado un boton, pero no soy capaz de abrir el componente detalle-coche')
    
  }

}
