import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from './_pages/estudiante/estudiante.component';
import { MteEstudianteComponent } from './_pages/estudiante/mte-estudiante/mte-estudiante.component';
import { InicioComponent } from './_pages/inicio/inicio.component';


const routes: Routes = [
  {component:InicioComponent,path:"inicio"},
  {component: EstudianteComponent,path: "estudiante",children:[
  {path:'nuevo', component: MteEstudianteComponent},
  {path:'editar/:id', component: MteEstudianteComponent}]
},
  {path:"", redirectTo: "inicio", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
