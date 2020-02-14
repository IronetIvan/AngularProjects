import { Injectable } from '@angular/core';
import { Tecnologia } from 'src/app/utils/tecnologia';
import { Asignatura } from 'src/app/utils/asignatura';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  objetoJava: Tecnologia = new Tecnologia('Java', 'Multiplataforma desarrollado por Oracle', '../assets/images/java.png');
  objetoPs: Tecnologia = new Tecnologia('Powershell', 'Desarrollado para la administración de SO', '../assets/images/powershell.png');
  objetoHtml: Tecnologia = new Tecnologia('HTML', 'DEsarrollado para el desarrollo de paginas webs', '../assets/images/html.jpeg');
  objetoMysql: Tecnologia = new Tecnologia('Mysql', 'Desarrollado para base de datos', '../assets/images/mysql.jpg');
  objetoPhp: Tecnologia = new Tecnologia('PHP', 'Desarrollado para webs dinámicas', '../assets/images/php.png');
  objetoPy: Tecnologia = new Tecnologia('Python', 'Desarrollado para backend y ia', '../assets/images/python.jpg');
  objetoAn: Tecnologia = new Tecnologia('Angular', 'Multiplataforma desarrollado por google', '../assets/images/angular-icon.svg');
  objetoJs: Tecnologia = new Tecnologia('JavaScript', 'BackEnd y FrontEnd', '../assets/images/js.jpg');
  tecnologias: Tecnologia[] = [this.objetoJava, this.objetoPs, this.objetoHtml, this.objetoMysql, this.objetoPhp, this.objetoPy, this.objetoAn, this.objetoJs];
  asignaturasDAM: Asignatura[]  = [

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
      tecnologias: [this.objetoJava, this.objetoPhp],
      conocimientos: ["Utilidad", "programacion", "c++"]
    },
    {
      nombre:"Base de datos",
      ciclo:"dam1",
      siglas:"BBDD",
      tecnologias: [this.objetoJava, this.objetoMysql],
      conocimientos: ["Utilidad", "base de datos", "MySql"]
    },
    {
      nombre:"Desarrollo de interfaces",
      ciclo:"dam2",
      siglas:"DI",
      tecnologias: [this.objetoJava, this.objetoAn],
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
      tecnologias: [this.objetoJava, this.objetoMysql],
      conocimientos: ["Utilidad", "BBDD", "MySql"]
    },
    {
      nombre:"Procesos y servicios",
      ciclo:"dam2",
      siglas:"PSP",
      tecnologias: [this.objetoJava, this.objetoPhp],
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
  getAsignaturaDAM(ciclo:String):Asignatura[]{
    let asignaturaCiclo:Asignatura[] = [];
    this.asignaturasDAM.forEach(element => {
      if(element.ciclo === ciclo){
        this.asignaturasDAM.push(element);
      }
    });
    return asignaturaCiclo;

  }
  
}


