import { Injectable } from '@angular/core';
import { Marca } from '../utils/marca';
import { Coche } from '../utils/coche';
import { core } from '@angular/compiler';
import { element } from 'protractor';
import { DetalleCochesComponent } from '../components/detalle-coches/detalle-coches.component';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  cocheBMW:Marca = {titulo:"BMW", descripcion:"Marca alemana vehículos de alta gama",imagen:"../assets/images/bmwlogo.png"}
  cocheFerrari:Marca = {titulo:"Ferrari", descripcion:"Marca italiana vehículos deportivos de alto rendimiento",imagen:"../assets/images/ferrari.png"}
  cocheRomeo:Marca = {titulo:"Alfa Romeo", descripcion:"Marca italiana vehículos de alta gama",imagen:"../assets/images/alfaromeo.png"}
  cocheMercedes:Marca = {titulo:"Mercedes", descripcion:"Marca alemana vehículos de alta gama",imagen:"../assets/images/mercedes.png"}
  cocheRenault:Marca = {titulo:"Renault", descripcion:"Marca francesa vehículos de media y alta gama",imagen:"../assets/images/renault.png"}
  cochePorsche:Marca = {titulo:"Porsche", descripcion:"Marca alemana vehículos deportivos con grandes prestaciones",imagen:"../assets/images/porsche.png"}
  marcas:Marca[]= [this.cocheBMW,this.cocheFerrari, this.cocheMercedes, this.cochePorsche, this.cocheRenault, this.cocheRomeo]

  coches:Coche[]=[
    {nombre: "BMW",modelo: "M4",siglas: "M4",marca: [this.cocheBMW],caracteristicas: ["Deportivo", "Coupe", 'Rendimiento'], imagen:"../assets/images/bmw.jpg"}, 
    {nombre: "Ferrari",modelo: "459 Italia",siglas: "458Ita",marca: [this.cocheFerrari],caracteristicas: ['Superdeportivo', 'Lujo', 'Alta CC'],imagen:"../assets/images/f458.jpg"}, 
    {nombre: "Alfa Romeo",modelo: "Giulia",siglas: "Giulia",marca: [this.cocheRomeo],caracteristicas: ['Italia', 'Deporyivo', 'ALta gama'],imagen:"../assets/images/giulia.jpg"},
    {nombre: "Mercedes",modelo: "AMG GT",siglas: "AMG",marca: [this.cocheMercedes],caracteristicas: ["Alemania ", "Deportivo", "Alta gama"],imagen:"../assets/images/mamg.jpg"}, 
    {nombre: "Renault",modelo: "Megane RS", siglas: "RS",marca: [this.cocheRenault],caracteristicas: ['Francia', 'Deportivo', 'Elegancia'],imagen:"../assets/images/megane.jpg"}, 
    {nombre: "Porsche",modelo: "911 Carrera",siglas: "911",marca: [this.cochePorsche],caracteristicas: ['Alemania', 'Superdeportivo', 'Alta CC'],imagen:"../assets/images/p911.jpg"}
  ];


  constructor() { }

  cartasMarcas:Marca[]
  cartasCoches:Coche[]

  getAllMarcas():Marca[]{
    return this.marcas;
  }
  getAllCoches():Coche[]{
    return this.coches;
  }

  getCochesDeportivos(modelo:string):Coche[]{
    let cochesDep:Coche[] = []
    this.coches.forEach(element => {
      if (element.modelo == modelo) {
        this.coches.push(element)
      }
    })
    return this.coches;

  }

  getArrayMarcas():Marca[]{
    return this.cartasMarcas
  }

  getArrayCoches():Coche[]{
    return this.cartasCoches;
  }

  getModelo(modelo:string):Coche[]{
    let cochesDet:Coche[] = []
    this.coches.forEach(element=>{
      if(element.modelo == modelo){
        this.coches.push(element)
      }
    })
    return this.coches;
  }

}
