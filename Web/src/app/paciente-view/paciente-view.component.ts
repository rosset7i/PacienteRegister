import { Component, OnInit } from '@angular/core';

import { PacienteService } from '../paciente-form/paciente.service';
import { PacienteDTO, PacienteModel } from './paciente-models';

@Component({
  selector: 'app-paciente-view',
  templateUrl: './paciente-view.component.html',
  styleUrls: ['./paciente-view.component.css'],
})
export class PacienteViewComponent implements OnInit {
  isFormVisible: boolean = true;

  isListaVisible: boolean = false;

  isEditFormVisible: boolean = false;

  pacientes: PacienteModel[];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.findAll();
  }

  onFiltrar(pacientes: PacienteModel[]) {
    this.pacientes = pacientes;
  }

  onCadastrar() {
    if (this.isFormVisible && !this.isListaVisible) {
      this.isFormVisible = false;
      this.isListaVisible = true;
    } else {
      this.isFormVisible = true;
      this.isListaVisible = false;
    }
  }

  onRemove(id: Number) {
    this.pacienteService.delete(id).subscribe((paciente) => {
      this.findAll();
    });
  }

  findAll() {
    this.pacienteService
      .findAll()
      .subscribe((pacientes) => (this.pacientes = pacientes));
  }

  onSubmit(paciente: PacienteDTO) {
    this.pacienteService.post(paciente).subscribe(() => this.findAll());
  }
}
