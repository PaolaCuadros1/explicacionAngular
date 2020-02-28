import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Módulo utilizado para modifica para utilizar la directiva ngModel.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
