import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';
import { PesquisaPacienteComponent } from './pesquisa-paciente/pesquisa-paciente.component';

const routes: Routes = [
  { path: 'home', component: PacienteViewComponent },
  { path: 'editar/:id', component: EditarPacienteComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
