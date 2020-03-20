import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { CursoModule } from './curso/curso.module';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputOutputPropertyComponent } from './input-output-property/input-output-property.component';
import { MeuPrimeiroComponent } from './meu-componente/meu-primeiro.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';



@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    EventBindingComponent,
    PropertyBindComponent,
    InputOutputPropertyComponent,
    CicloVidaComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CursoModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
