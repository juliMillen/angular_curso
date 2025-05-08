import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})


export class ComponenteForComponent {

  tareas : string[] = [
    'Aprender Angular',
    'Desarrollar una app',
    'Aprender typescript'
  ];


  agregarTarea(nuevaTarea: string):void{
    if(nuevaTarea){
      this.tareas.push(nuevaTarea);
    }else{
      console.log('No se ha podido agregar la tarea');
    }
  }
}
