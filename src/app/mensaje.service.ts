
// servicios en one piece 
import { Injectable } from '@angular/core';


// el injectable es para que podamos inyectar este servicios a los componentes y el root especifica que se puede inportar desde cualquier parte del proyecto
@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private mensaje: string = "hola desde el servicio  de angular "

  constructor() { }

  obtenermensaje():string{
    return this.mensaje;
  }
}
