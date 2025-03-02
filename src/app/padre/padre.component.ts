import { Component } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";  // importa los componentes que vayamos a usar 
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],   // importa los componentes que vayamos a usar 
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensajePadre:string="mensaje desde el componente padre";
  mensaje:string="";
  recibir(mensajehijo:string){
    this.mensaje=mensajehijo;

  }
}