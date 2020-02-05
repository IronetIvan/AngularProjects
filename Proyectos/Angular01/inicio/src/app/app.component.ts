import { Component } from '@angular/core';
import { Tecnologia } from './utils/Tecnologia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements Object{
  title = 'Hola mundo';
  nombre:string = "Ivan Redondo";
  rutajava:string = "../assets/images/java.png";
  objetoJava:Tecnologia = new Tecnologia("Java", "Plataforma desarrolada por Orcale", this.rutajava);
  objetoPS:Tecnologia = new Tecnologia("PowerShell", "Automatizacion de SO", "../assets/images/powershell.png");
  objetoHtml:Tecnologia = new Tecnologia("HTML", "Aplicaciones web", "../assets/images/html.jpeg");
  objetoMysql:Tecnologia = new Tecnologia("MySql", "Administracion de base de datos", "../assets/images/mysql.jpg");
objetoPhp:Tecnologia = new Tecnologia("PHP", "Desarrollado para webs dinamicas", "../assets/images/php.png");
objetoPy:Tecnologia = new Tecnologia("Python", "Desarrollado para backend", "../assets/images/python.jpg");
objetoAngular:Tecnologia = new Tecnologia("Angular", "Multiplataforma desarrollada por Google", "../assets/images/angular-icon.svg");
objetoJScript:Tecnologia = new Tecnologia("JavaScript", "Backend y Frontend", "../assets/images/js.jpg");
objetoXml:Tecnologia = new Tecnologia("XML", "Estructura de datos", "../assets/images/xml.jpg");
elementos:Tecnologia[] = [this.objetoJava, this.objetoAngular, this.objetoHtml, this.objetoMysql, this.objetoPS, this.objetoPhp, this.objetoPy, this.objetoXml ]


/*ngOnInit():void{
  console.log(this.objetoJava.getTitulo());
}*/
}
