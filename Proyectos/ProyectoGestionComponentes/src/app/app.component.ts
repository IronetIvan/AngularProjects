import { Component, OnInit } from '@angular/core';
import { Tecnologia } from './utils/tecnologia';
import { Asignatura } from './utils/asignatura';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.asignaturas = this.servicio.getAllAsignaturas();
    this.tecnologias = this.servicio.getAllTecnologias();
  }

  title = 'Tecnologias';
  nombre: string = 'Ivan Redondo';
  mostrarTecnologias: boolean = true;
  mostrarCurso: string;

  tecnologias: Tecnologia[];
  asignaturas: Asignatura[];

  constructor(private servicio:DatosService){

  }

     /* mandarMensaje(elemento: Tecnologia){
      console.log(elemento.getDescripcion());
    }*/

    cambiarTecnologia(){
      console.log(this.mostrarTecnologias);
      this.mostrarTecnologias = !this.mostrarTecnologias;
    }

    cambiarCurso(elemento: string) {
      this.mostrarCurso = elemento;
      console.log(elemento);
      this.asignaturas = this.servicio.getAsignaturasDAM(elemento);
    }
 
}
