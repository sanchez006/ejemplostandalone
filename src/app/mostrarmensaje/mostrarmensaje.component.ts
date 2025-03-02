import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrarmensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrarmensaje.component.html',
  styleUrl: './mostrarmensaje.component.css'
})
export class MostrarmensajeComponent {
 mensaje="hola mundo";

  mostrarmensaje(){
    this.mensaje="hola mundo 2.0"
  }

  RegresarMensaje(){
   this.mensaje=" "
  }
}
