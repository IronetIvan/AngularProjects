import { Component, OnInit } from '@angular/core';
import { Tecnologia } from './utils/tecnologia';
import { TecnologiaInt } from './utils/tecnologia_dos';
import { Asignatura } from './utils/asignatura';
import { CiclosService } from './services/datos/ciclos.service';
import { element } from 'protractor';

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

  title = 'introduccion';
  nombre: string = 'Ivan Redondo';
  mostrarTecnologias: boolean = true;
  mostrarCurso: string;

  tecnologias: Tecnologia[];
  asignaturas: Asignatura[];

  constructor(private servicio:CiclosService){

  }


    mandarMensaje(elemento: Tecnologia){
      console.log(elemento.getDescripcion());
    }

    cambiarTecnologia(){
      console.log(this.mostrarTecnologias);
      this.mostrarTecnologias = !this.mostrarTecnologias;
    }

    cambiarCurso(elemento: string) {
      this.mostrarCurso = elemento;
      console.log(elemento);
      this.asignaturas = this.servicio.getAsignaturaDAM(elemento);
    }

}
