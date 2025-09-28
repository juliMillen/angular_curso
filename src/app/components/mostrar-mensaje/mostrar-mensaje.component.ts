import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent implements OnInit{
mensaje: string = '';

constructor(private route:ActivatedRoute){}

ngOnInit(){
  this.mensaje = this.route.snapshot.queryParams['mensaje'];
}

resetearMensaje() {
  this.mensaje = '';
}


mostrarMensaje() {
  this.mensaje = '¡Haz hecho click en el boton!'
}

}
