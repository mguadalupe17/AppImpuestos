import { Component } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../gasto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  ruc: string = '';
  valor: number = 0;
  gasto: string = '';

  constructor(private gastoService: GastoService) {}

  guardarFactura() {
    const nuevoGasto: Gasto = {
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto
    };

    this.gastoService.agregarGasto(nuevoGasto).subscribe(
      response => {
        console.log('Factura guardada exitosamente', response);
    
      },
      error => {
        console.error('Error al guardar la factura', error);
      }
    );
  }
}