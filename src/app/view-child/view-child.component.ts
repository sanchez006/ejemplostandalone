import { Component, ElementRef, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
 @ViewChild("referenciaInput") inputElemento!:ElementRef;

 cambiartexto(){
  this.inputElemento.nativeElement.value="nuevo texto que se cambio por @view child";
 }
}
