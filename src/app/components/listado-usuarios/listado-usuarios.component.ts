import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
usuarios: any[] = [];

constructor(private usuarioService: UsuariosService){
  
}

ngOnInit(){
  this.usuarioService.obtenerDatos().subscribe((data) => {
    this.usuarios = data;
  });
}
}
