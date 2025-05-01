import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  private titulo = 'Titulo Componente Hijo';

  //metodo getter de typescript
  get mostrarTitulo(){
    return this.titulo;
  }

  //metodo de javascript

  getTitulo(){
    return this.titulo;
  }
}
