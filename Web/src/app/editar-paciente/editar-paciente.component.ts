import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PacienteService } from '../paciente-form/paciente.service';
import { PacienteModel, PacienteDTO } from './../paciente-view/paciente-models';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css'],
})
export class EditarPacienteComponent implements OnInit {
  paciente: PacienteModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paciente) => {
      this.pacienteService.findById(paciente['id']).subscribe((paciente) => {
        this.paciente = paciente;
      });
    });
  }

  onSubmit(paciente: PacienteDTO) {
    this.paciente.nome = paciente.nome;
    this.paciente.endereco = paciente.endereco;
    this.paciente.dataDeNascimento = paciente.dataDeNascimento;
    this.paciente.observacao = paciente.observacao;
    this.pacienteService
      .put(this.paciente.id, paciente)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
