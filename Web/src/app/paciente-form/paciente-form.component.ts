import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { PacienteDTO } from '../paciente-view/paciente-models';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css'],
})
export class PacienteFormComponent implements OnInit {
  form: FormGroup;

  isSent: boolean = true;

  @Input() modelo;

  @Output() onSubmitEmmiter: EventEmitter<PacienteDTO> =
    new EventEmitter<PacienteDTO>();

  constructor(private formBuider: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createForm();

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  createForm() {
    const form = this.formBuider.group({
      nome: ['', { validators: Validators.required }],
      dataDeNascimento: ['', { validators: Validators.required }],
      endereco: ['', { validators: Validators.required }],
      observacao: ['', { validators: Validators.required }],
    });

    return form;
  }

  onSubmit() {
    this.onSubmitEmmiter.emit(this.form.value);
    this.form.reset();
    alert('Dados enviados com sucesso!');
  }
}
