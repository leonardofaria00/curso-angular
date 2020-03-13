import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CursoModule } from './curso/curso.module';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MeuPrimeiroComponent } from './meu-componente/meu-primeiro.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
