import { Component, OnInit } from '@angular/core';
import { Tecnologia } from './utils/tecnologia';
import { TecnologiaInt } from './utils/tecnologia_dos';
import { Asignatura } from './utils/asignatura';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'introduccion';
  nombre: string = 'Borja Martin';
  mostrarTecnologias: boolean = true;
  mostrarCurso: string;
  rutaImagen: string = '../assets/images/java.png';
  objetoJava: Tecnologia = new Tecnologia('Java', 'Multiplataforma desarrollado por Oracle', '../assets/images/java.png');
  objetoPs: Tecnologia = new Tecnologia('Powershell', 'Desarrollado para la administración de SO', '../assets/images/powershell.png');
  objetoHtml: Tecnologia = new Tecnologia('HTML', 'DEsarrollado para el desarrollo de paginas webs', '../assets/images/html.jpeg');
  objetoMysql: Tecnologia = new Tecnologia('Mysql', 'Desarrollado para base de datos', '../assets/images/mysql.jpg');
  objetoPhp: Tecnologia = new Tecnologia('PHP', 'Desarrollado para webs dinámicas', '../assets/images/php.png');
  objetoPy: Tecnologia = new Tecnologia('Python', 'Desarrollado para backend y ia', '../assets/images/python.jpg');
  objetoAn: Tecnologia = new Tecnologia('Angular', 'Multiplataforma desarrollado por google', '../assets/images/angular-icon.svg');
  objetoJs: Tecnologia = new Tecnologia('JavaScript', 'BackEnd y FrontEnd', '../assets/images/js.jpg');
  elementos: Tecnologia[] = [this.objetoJava, this.objetoPs, this.objetoHtml, this.objetoMysql, this.objetoPhp, this.objetoPy, this.objetoAn, this.objetoJs];
  asignaturasDAM1: Asignatura[]  = [

    {
      nombre:"Lenguaje de marcas",
      ciclo:"DAM1",
      siglas:"LM",
      tecnologias: [this.objetoHtml, this.objetoJs],
      conocimientos: ["Utilidad", "web", "css"]
    },
    {
      nombre:"Programacion",
      ciclo:"DAM1",
      siglas:"POO",
      tecnologias: [this.objetoJava, this.objetoPhp],
      conocimientos: ["Utilidad", "programacion", "c++"]
    },
    {
      nombre:"Base de datos",
      ciclo:"DAM1",
      siglas:"BBDD",
      tecnologias: [this.objetoJava, this.objetoMysql],
      conocimientos: ["Utilidad", "base de datos", "MySql"]
    }
  ]
  
  asignaturasDAM2: Asignatura[] = [

    {
      nombre:"Desarrollo de interfaces",
      ciclo:"DAM2",
      siglas:"DI",
      tecnologias: [this.objetoJava, this.objetoAn],
      conocimientos: ["Utilidad", "interfaces", "multiplataforma"]
    },
    {
      nombre:"Programacion Multimedia",
      ciclo:"DAM2",
      siglas:"PMDM",
      tecnologias: [this.objetoJava, this.objetoHtml],
      conocimientos: ["Utilidad", "android", "css"]
    },
    {
      nombre:"Acceso a datos",
      ciclo:"DAM2",
      siglas:"AD",
      tecnologias: [this.objetoJava, this.objetoMysql],
      conocimientos: ["Utilidad", "BBDD", "MySql"]
    },
    {
      nombre:"Procesos y servicios",
      ciclo:"DAM2",
      siglas:"PSP",
      tecnologias: [this.objetoJava, this.objetoPhp],
      conocimientos: ["Utilidad", "procesos", "seguridad"]
    }



  ]


    mandarMensaje(elemento: Tecnologia){
      console.log(elemento.getDescripcion());
    }

    cambiarTecnologia(){
      console.log(this.mostrarTecnologias);
      this.mostrarTecnologias = !this.mostrarTecnologias;
    }

    cambiarCurso(elemento: string) {
      this.mostrarCurso = elemento;
    }

}
