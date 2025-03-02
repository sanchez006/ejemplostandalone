import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PadreComponent } from "./padre/padre.component";
import { MostrarmensajeComponent } from "./mostrarmensaje/mostrarmensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { TwowaybandingComponent } from "./twowaybanding/twowaybanding.component";
import { ComponenteIFComponent } from "./componente-if/componente-if.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, InterpolacionComponent, PadreComponent, 
            MostrarmensajeComponent, ReplicadorComponent, TwowaybandingComponent, ComponenteIFComponent, 
            ComponenteForComponent, ViewChildComponent],//importa los nuevos componentes que se crean 


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componente View Child';
}
 