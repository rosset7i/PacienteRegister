import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PacienteDTO, PacienteModel } from '../paciente-view/paciente-models';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<PacienteModel[]> {
    return this.httpClient.get<PacienteModel[]>(
      'https://localhost:7123/api/pacientes'
    );
  }

  findById(id: Number): Observable<PacienteModel> {
    return this.httpClient.get<PacienteModel>(
      `https://localhost:7123/api/pacientes/${id}`
    );
  }

  post(paciente: PacienteDTO): Observable<PacienteDTO> {
    return this.httpClient.post<PacienteDTO>(
      'https://localhost:7123/api/pacientes',
      paciente
    );
  }

  put(id: Number, paciente: PacienteDTO): Observable<PacienteDTO> {
    return this.httpClient.put<PacienteDTO>(
      `https://localhost:7123/api/pacientes/${id}`,
      paciente
    );
  }

  delete(id: Number): Observable<PacienteModel> {
    return this.httpClient.delete<PacienteModel>(
      `https://localhost:7123/api/pacientes/${id}`
    );
  }
}
