import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarCitaComponent } from './components/agregar-editar-cita/agregar-editar-cita.component';
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { VerCitaComponent } from './components/ver-cita/ver-cita.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarCitaComponent,
    ListadoCitasComponent,
    VerCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
