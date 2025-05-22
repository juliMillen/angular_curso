import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  empleados =[
    {nombre: 'Fabian Cubero', sueldo: 35000, fechaNacimiento:new Date('1985-06-18')},
    {nombre: 'Maher Carrizo', sueldo: 45000, fechaNacimiento:new Date('2003-10-22')},
    {nombre: 'Lucia Ayala', sueldo:30000, fechaNacimiento:new Date('2000-04-30')}
  ];
}
