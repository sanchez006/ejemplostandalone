import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-twowaybanding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twowaybanding.component.html',
  styleUrl: './twowaybanding.component.css'
})
export class TwowaybandingComponent {
  saludo= "cambia este mensaje"; //mensaje que se editara desde el DOM afectando tanto la UI y el componente
}
