import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service';

/**
 * Passa para o transpiler um decorator chamado @Component que recebe um objeto
 */
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  nomePortal: string;

  cursos: string[];

  constructor(private cursoService: CursoService) {
    this.nomePortal = 'https://loiane.training/';

    this.cursos = cursoService.getCursos();
  }

  ngOnInit(): void {
  }
}
