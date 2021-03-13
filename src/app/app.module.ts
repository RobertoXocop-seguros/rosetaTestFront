import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MatButtonModule} from '@angular/material';


import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './_pages/estudiante/estudiante.component';
import { InicioComponent } from './_pages/inicio/inicio.component';
import { from } from 'rxjs';
import { MteEstudianteComponent } from './_pages/estudiante/mte-estudiante/mte-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    InicioComponent,
    MteEstudianteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
