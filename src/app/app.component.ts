import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pageAngular';
  autorName = 'Paola Cuadros'; // Nueva variable.
  names = ['Jefry', 'Diego', 'Yalile', 'Andres', 'Andrey']; // Creación del array que vamos a iterar.

  /**
   * Método utilizado para agregar un nuevo nombre al dar clic en un boton.
   */
  addName() {
    this.names.push('nuevo nombre');
  }

  /**
   * Ya que typeScript es fuertemente tipado, debemos especificar que tipo de dato vamos a recibir.
   * @param index de tipo number, el cual es el index del elemento.
   */
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
