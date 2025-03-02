import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  standalone: true,
  imports: [],
  templateUrl: './componente-if.component.html',
  styleUrl: './componente-if.component.css'
})
export class ComponenteIFComponent {

  auntenticado:boolean=false;

  cambiar(){
    this.auntenticado=!this.auntenticado //con este ! alterna el valor entre true y false con un mismo boton 
  }

}
