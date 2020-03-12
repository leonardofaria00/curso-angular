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

  constructor(cursoService: CursoService) {
    this.nomePortal = 'http://loiane.traning';

    this.cursos = cursoService.getCursos();
  }

  ngOnInit(): void {
  }
}
