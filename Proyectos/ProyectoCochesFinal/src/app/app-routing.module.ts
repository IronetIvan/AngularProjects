import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { CochesComponent } from './components/coches/coches.component';
import { DetalleCochesComponent } from './components/detalle-coches/detalle-coches.component';


const routes: Routes = [

  {path: 'todos', component:TodoComponent},
  {path:'marcas', component:MarcasComponent},
  {path:'coches', component:CochesComponent},
  {path:'coches/:parametro', component:CochesComponent},
  {path:'coches', component:DetalleCochesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
