import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {

  tareas: string[]= [
    'aprender Angular',
    'desarrollar pagina',
    'aprender ts'
  ]

  nuevotexto:string=" "

  agregarTarea(nuevaTarea:string){
    if(nuevaTarea){
      this.tareas.push(nuevaTarea);
    }
  }
}
