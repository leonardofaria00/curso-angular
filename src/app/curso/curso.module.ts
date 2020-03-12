import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoComponent } from './curso.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';


@NgModule({
  declarations: [
    CursoComponent,
    CursoDetalhesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursoComponent
  ]
})
export class CursoModule { }
