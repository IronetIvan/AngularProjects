import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Coche } from 'src/app/utils/coche';
import { Marca } from 'src/app/utils/marca';
import { DetalleCochesComponent } from '../detalle-coches/detalle-coches.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  mostrarMarcas:boolean= true;
  mostrarCoches:boolean= true;
  coches:Coche[];
  marcas:Marca[];
  

  constructor(private servicios:DatosService) { }

  ngOnInit(): void {
    this.coches = this.servicios.getAllCoches();
    this.marcas= this.servicios.getAllMarcas();
  }
}
