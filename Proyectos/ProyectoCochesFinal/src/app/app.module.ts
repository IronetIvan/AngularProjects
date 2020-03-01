import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { TodoComponent } from './components/todo/todo.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { CochesComponent } from './components/coches/coches.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    TodoComponent,
    MarcasComponent,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
