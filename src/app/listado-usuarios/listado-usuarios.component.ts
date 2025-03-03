import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
usuarios: any[] = [];
// inyectamos eln servicio de tipo usuarioService
  constructor(private usuarioservices:UsuariosService){}

  // la funcion ngOnInit es un ciclo de vida en los componentes que se llama despues del contructor
  ngOnInit():void {
    this.usuarioservices.obtenerdatos().subscribe((data)=>{
      this.usuarios=data
    })

}
 
}

