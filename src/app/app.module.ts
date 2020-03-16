import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CursoModule } from './curso/curso.module';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MeuPrimeiroComponent } from './meu-componente/meu-primeiro.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';



@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    EventBindingComponent,
    OutputPropertyComponent,
    PropertyBindComponent
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
