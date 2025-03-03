
// ejemplo usando servicios y Observables (ejemplo que esta en el archivo serviciosobservables.pdf)

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsuariosService {

  private apiURL= "https://jsonplaceholder.typicode.com/users" //crea una variable donde se alamacena la url

  constructor(private pagina: HttpClient) { //esta tipo httclient se debe de configuar en el archivo main.ts
 

   }

   obtenerdatos():Observable <any> {
    return this.pagina.get(this.apiURL);

   }
}
