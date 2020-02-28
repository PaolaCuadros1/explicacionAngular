import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Módulo utilizado para modifica para utilizar la directiva ngModel.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './components/music/music.component'; // Importado el coponente....

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent // Declarando el componente.....
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Esto se debe poner acá para que se pueda utilizar dentro de nuestro proyecto.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
