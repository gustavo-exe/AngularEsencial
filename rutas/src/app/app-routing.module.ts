import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { Error404Component } from "./error404/error404.component";
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DetallesComponent } from './detalles/detalles.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  //Ruta por defecto
  {path:'inicio', component:InicioComponent},
  {path:'', pathMatch:'full',redirectTo:'inicio'},
  //Rutas comunes
  {path:'lista-de-libros', component:ListaDeLibrosComponent},
  {path:'acerca-de', component:AcercaDeComponent},

  //Paso de valores
  {path:'detalles/:libroId', component:DetallesComponent},

  //Se dispata en una ruta que no existe
  {path:'404', component:Error404Component},
  {path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
