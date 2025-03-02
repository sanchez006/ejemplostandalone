import { Injectable } from '@angular/core';

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
