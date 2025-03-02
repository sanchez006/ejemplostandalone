import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // se inpurta el decorador input que recibe informacion del componente padre 
  // ! operador non-null hace que no genere error miestras aun no inicializamos la variable en el componente padre
  @Input() mensaje!:string

  // decarador output necesario para poder enviar el mensaje desde el componente hijo hacia el componente padre
  @Output() notificarpadre = new EventEmitter;

  enviarmsj(){
    this.notificarpadre.emit("mensaje desde el componente hijo hacia el componente padre")
  }

}
