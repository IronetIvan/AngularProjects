import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private navegation:Router) { }

  ngOnInit() {
  }
navegar(parametro : string){
  console.log(parametro);
  this.navegation.navigate(["tecnologias", parametro]);
}
}
