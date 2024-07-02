import { Component, OnInit } from '@angular/core';
import deducibles from './deducibles.json';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  deducibles: any[] = deducibles;

  constructor() { }

  ngOnInit(): void {
  }
  informacion()
{
 alert('Esta es información adicional');
}

  informaciongasto(deducible: any): void {
    alert('Esta es información adicional sobre ' + deducible.nombre);
  }

  borrarDeducible(deducible: any): void {
    const index = this.deducibles.indexOf(deducible);
    if (index !== -1) {
      this.deducibles.splice(index, 1);
    }
  }
}