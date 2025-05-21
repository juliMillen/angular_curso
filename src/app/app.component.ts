import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./components/nuevo-componente/nuevo-componente.component";
import { ComponenteEnLineaComponent } from "./components/componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./components/interpolacion/interpolacion.component";
import { PadreComponent } from "./components/padre/padre.component";
import { MostrarMensajeComponent } from "./components/mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./components/replicador/replicador.component";
import { SaludarComponent } from "./components/saludar/saludar.component";
import { ComponenteIfComponent } from "./components/componente-if/componente-if.component";
import { AgregarTareaComponent } from "./components/agregar-tarea/agregar-tarea.component";
import { ComponenteForComponent } from "./components/componente-for/componente-for.component";
import { ViewChildComponent } from "./components/view-child/view-child.component";
import { MensajeService } from './services/mensaje.service';
import { ListadoUsuariosComponent } from "./components/listado-usuarios/listado-usuarios.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, InterpolacionComponent, PadreComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent, ComponenteForComponent, ViewChildComponent, ListadoUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Servicios y Observables en Angular';

  mensaje:string;

  constructor(mensaje:MensajeService){
    this.mensaje = mensaje.obtenerMensaje();
  }
}
