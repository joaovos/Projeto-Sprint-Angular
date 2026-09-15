import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../services/vehicles';
import { MenuComponent } from '../menu/menu';
import { Veiculo, VeiculoTabela } from '../models/veiculo.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  veiculos: Veiculo[] = [];
  veiculoSelecionado: Veiculo | null = null;
  codigoVin = '2FRHDUYS2Y63NHD22455';
  dadosVeiculo: VeiculoTabela | null = null;
  mensagemErro: string | null = null;

  constructor(private vehicle: Vehicle) {}

  ngOnInit(): void {
    this.vehicle.getVeiculos().subscribe((response) => {
      this.veiculos = response.vehicles;
    });

    this.buscarDadosVeiculo();
  }

  veiculoEscolhido(event: Event): void {
    const idSelecionado = (event.target as HTMLSelectElement).value;
    if (idSelecionado) {
      this.veiculoSelecionado = this.veiculos.find((v) => v.id == Number(idSelecionado)) || null;
    } else {
      this.veiculoSelecionado = null;
    }
  }

  buscarDadosVeiculo(): void {
    const vin = this.codigoVin.trim();

    if (!vin) {
      this.mensagemErro = 'Informe um código VIN.';
      this.dadosVeiculo = null;
      return;
    }

    this.vehicle.buscarDadosVeiculo(vin).subscribe({
      next: (response) => {
        this.dadosVeiculo = response;
        this.mensagemErro = null;
      },
      error: (error) => {
        this.mensagemErro = error?.error?.message || 'Código VIN não encontrado.';
        this.dadosVeiculo = null;
      },
    });
  }
}
