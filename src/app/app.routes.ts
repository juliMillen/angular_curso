import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { MostrarMensajeComponent } from './components/mostrar-mensaje/mostrar-mensaje.component';

export const routes: Routes = [
    {path:'', component: ListadoUsuariosComponent },
    {path:'mostrar-mensaje', component:MostrarMensajeComponent}
];
