import { Injectable } from '@angular/core';
import { Tecnologia } from '../utils/tecnologia';
import { Asignatura } from '../utils/asignatura';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


  objetoJava: Tecnologia = {titulo:'Java',imagen:'../assets/images/java.png', descripcion:'Multiplataforma desarrollado por Oracle'};
  objetoAngular: Tecnologia = {titulo:'Angular',imagen:'../assets/images/anguar.jpeg', descripcion:'Lenguaje de programacion desarrollado por Google'};
  objetoHtml: Tecnologia = {titulo:'HTML',imagen:'../assets/images/html.jpeg', descripcion:'Lenguaje de marcas'};
  objetoJs: Tecnologia = {titulo:'JavaScript',imagen:'../assets/images/js.jpg', descripcion:'Lenguaje de progrmacion con scripts'};
  objetoPython: Tecnologia = {titulo:'Python',imagen:'../assets/images/python.jpg', descripcion:'Lenguaje de programacion Python'};
tecnologias: Tecnologia[] = [this.objetoJava, this.objetoAngular, this.objetoHtml, this.objetoJs, this.objetoPython];
asignaturasDAM: Asignatura[]=[
{
  nombre:"Lenguaje de marcas",
  ciclo:"dam1",
  siglas:"LM",
  tecnologias: [this.objetoHtml, this.objetoJs],
  conocimientos: ["Utilidad", "web", "css"]
},
{
  nombre:"Programacion",
  ciclo:"dam1",
  siglas:"POO",
  tecnologias: [this.objetoJava, this.objetoJs],
  conocimientos: ["Utilidad", "programacion", "c++"]
},
{
  nombre:"Base de datos",
  ciclo:"dam1",
  siglas:"BBDD",
  tecnologias: [this.objetoJava, this.objetoPython],
  conocimientos: ["Utilidad", "base de datos", "MySql"]
},
{
  nombre:"Desarrollo de interfaces",
  ciclo:"dam2",
  siglas:"DI",
  tecnologias: [this.objetoJava, this.objetoAngular],
  conocimientos: ["Utilidad", "interfaces", "multiplataforma"]
},
{
  nombre:"Programacion Multimedia",
  ciclo:"dam2",
  siglas:"PMDM",
  tecnologias: [this.objetoJava, this.objetoHtml],
  conocimientos: ["Utilidad", "android", "css"]
},
{
  nombre:"Acceso a datos",
  ciclo:"dam2",
  siglas:"AD",
  tecnologias: [this.objetoJava, this.objetoHtml],
  conocimientos: ["Utilidad", "BBDD", "MySql"]
},
{
  nombre:"Procesos y servicios",
  ciclo:"dam2",
  siglas:"PSP",
  tecnologias: [this.objetoJava, this.objetoPython],
  conocimientos: ["Utilidad", "procesos", "seguridad"]
}

]



  constructor() { }


  getAllAsignaturas(): Asignatura[]{
    return this.asignaturasDAM;
  }
  getAllTecnologias(): Tecnologia[]{
    return this.tecnologias;
  }

  getAsignaturasDAM(ciclos:string): Asignatura[]{
    let asignaturaCiclo:Asignatura[] = [];
    this.asignaturasDAM.forEach(element => {
      if(element.ciclo === ciclos){
        this.asignaturasDAM.push(element);
      }
    });
    return asignaturaCiclo;

  }
}
