import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CursoModule } from './curso/curso.module';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MeuPrimeiroComponent } from './meu-componente/meu-primeiro.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';
import { InputOutputPropertyComponent } from './input-output-property/input-output-property.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';



@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    EventBindingComponent,
    PropertyBindComponent,
    InputOutputPropertyComponent,
    CicloVidaComponent
  ],
  imports: [
    BrowserModule,
    CursoModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
