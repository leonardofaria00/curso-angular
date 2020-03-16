import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-property',
  templateUrl: './input-output-property.component.html',
  styleUrls: ['./input-output-property.component.css']
})
export class InputOutputPropertyComponent implements OnInit {
  /**
   * Component meu-primeiro.component.ts define uma variável chamada de 'nomeDoCurso' ,e
   * Injeta em meu-primeiro.component.html passando a variável nomeDoCurso dentro de 
   * um property-bind chamado de [bind],
   * Em input-output-property.component.ts é recebido o input através do Decorator @Input e
   * nome da variávél que nesse caso é bind,
   * Finaliza fazendo interlopação da variável bind no inpit-output-property.html
   */
  @Input() bind: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
