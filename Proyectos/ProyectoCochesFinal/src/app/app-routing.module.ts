import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { CochesComponent } from './components/coches/coches.component';


const routes: Routes = [

  {path: 'todos', component:TodoComponent},
  {path:'marcas', component:MarcasComponent},
  {path:'coches', component:CochesComponent},
  {path:'coches/:parametro', component:CochesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
