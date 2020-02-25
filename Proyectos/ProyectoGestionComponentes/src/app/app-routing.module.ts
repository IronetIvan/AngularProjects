import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';


const routes: Routes = [

{path: 'asignaturas/:parametro', component: AsignaturasComponent},
{path: 'tecnologias/:tecno', component: AsignaturasComponent},
{path: 'asignaturasDAM', component:AsignaturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
