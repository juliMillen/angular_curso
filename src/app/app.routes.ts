import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { MostrarMensajeComponent } from './components/mostrar-mensaje/mostrar-mensaje.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/padre/hijo/hijo.component';


export const routes: Routes = [
    {path:'', component: ListadoUsuariosComponent },
    {path:'mostrar-mensaje', component:MostrarMensajeComponent},
    {
        path:'configuracion', children: [
        {path: 'padre', component: PadreComponent}, //localhost:4200/configuracion/padre
        {path: 'hijo', component:HijoComponent} //localhost:4200/configuracion/hijo
    ]}
];
