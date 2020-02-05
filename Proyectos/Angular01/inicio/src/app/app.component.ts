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

ngOnInit():void{
  console.log(this.objetoJava.getTitulo());
}
}
