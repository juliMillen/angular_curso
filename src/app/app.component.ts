import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./components/nuevo-componente/nuevo-componente.component";
import { ComponenteEnLineaComponent } from "./components/componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./components/interpolacion/interpolacion.component";
import { PadreComponent } from "./components/padre/padre.component";
import { HijoComponent } from "./components/hijo/hijo.component";
import { MostrarMensajeComponent } from "./components/mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./components/replicador/replicador.component";
import { SaludarComponent } from "./components/saludar/saludar.component";
import { ComponenteIfComponent } from "./components/componente-if/componente-if.component";
import { AgregarTareaComponent } from "./components/agregar-tarea/agregar-tarea.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, InterpolacionComponent, PadreComponent, HijoComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Local Reference en Angular';
}
