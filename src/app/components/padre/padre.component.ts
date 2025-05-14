import { Component } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [ HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
mensajePadre: string = 'Mensaje desde el componente padre';

}
