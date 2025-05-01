import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'Conociendo Angular';
  usuario = {
    nombre: 'Julian Millen',
    edad: 25
  };

  saludar(){
    return `Hola, ${this.usuario.nombre}`;
  }
}
