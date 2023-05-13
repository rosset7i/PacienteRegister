import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PacienteService } from '../paciente-form/paciente.service';
import { PacienteModel } from '../paciente-view/paciente-models';

@Component({
  selector: 'app-pesquisa-paciente',
  templateUrl: './pesquisa-paciente.component.html',
  styleUrls: ['./pesquisa-paciente.component.css'],
})
export class PesquisaPacienteComponent implements OnInit {
  form: any;

  pacientesLista: PacienteModel[] = [];

  pacientes = this.pacientesLista;

  @Output() listaEmmiter = new EventEmitter<PacienteModel[]>();

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: '',
    });

    this.pacienteService.findAll().subscribe((pacientes) => {
      this.pacientesLista = pacientes;
      this.pacientes = pacientes;
    });

    this.pacientes = this.form.valueChanges.subscribe((valor: any) => {
      this.pacientesLista = this.pacientes;
      this.filtrarPaciente(valor);
      this.listaEmmiter.emit(this.pacientesLista);
    });
  }

  filtrarPaciente(valor: any) {
    if (valor.nome) {
      this.pacientesLista = this.pacientesLista.filter(
        (paciente) => paciente.nome.indexOf(valor.nome) !== -1
      );
    }
  }
}
