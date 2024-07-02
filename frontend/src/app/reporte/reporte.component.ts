import { Component,OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../gasto';
import { Impuesto } from '../impuesto';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit{
  ngOnInit(): void {
  }
  gastos:Gasto[]=[];
  impuestos:Impuesto[]=[];
  constructor(private gastoService:GastoService) {
  this.gastoService.obtenerDatos().subscribe(data =>
  {
  console.log(data);
  this.gastos=data;
  });
  this.gastoService.obtenerimpuesto().subscribe(data=>
   {
    console.log(data);
  this.impuestos=data;
   } 
  )
  }
}
