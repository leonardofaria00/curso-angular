import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado() {
    alert('Fui clicado');
  }

  onKeyUp(eventoDigitado: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>eventoDigitado.target).value;
    console.log((<HTMLInputElement>eventoDigitado.target).value);

  }

  salvarDado(dado) {
    this.valorSalvo = dado;
  }

  onMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }
}
