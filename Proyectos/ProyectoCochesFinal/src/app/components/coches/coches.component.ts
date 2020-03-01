import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Marca} from 'src/app/utils/marca';
import { Coche } from 'src/app/utils/coche';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coches:Coche[];
  parametro:string[];

  constructor(private servicio:DatosService, private rutas:ActivatedRoute) { }

  ngOnInit() {
    this.coches= this.servicio.getAllCoches()
    this.rutas.params.subscribe(param =>{
      console.log(param);
      
    });
    //this.coches = this.servicio.getArrayCoches()
  }

}
