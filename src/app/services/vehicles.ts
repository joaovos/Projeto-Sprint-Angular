import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VeiculoTabela, VeiculoTabelaRequest, VeiculosAPI } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class Vehicle {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<VeiculosAPI> {
    return this.http.get<VeiculosAPI>(`${this.apiUrl}/vehicles`);
  }

  buscarDadosVeiculo(vin: string): Observable<VeiculoTabela> {
    const payload: VeiculoTabelaRequest = { vin };
    return this.http.post<VeiculoTabela>(`${this.apiUrl}/vehicleData`, payload);
  }
}
