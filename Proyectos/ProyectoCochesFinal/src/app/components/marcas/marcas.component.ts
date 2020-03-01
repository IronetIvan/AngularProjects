import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/utils/marca';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  marcas:Marca[];

  constructor(private servicios:DatosService) { }

  ngOnInit(): void {
    this.marcas= this.servicios.getAllMarcas();
  }

}
