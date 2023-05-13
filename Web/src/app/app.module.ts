import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { PesquisaPacienteComponent } from './pesquisa-paciente/pesquisa-paciente.component';

@NgModule({
  declarations: [AppComponent, PacienteFormComponent, PacienteViewComponent, EditarPacienteComponent, PesquisaPacienteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
