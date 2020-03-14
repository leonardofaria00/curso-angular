import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = '';

  pessoa: any = {
    nome: '',
    idade: ''
  }

  ngOnInit(): void {
  }

  botaoClicado() {
    alert('Fui clicado');
  }

  onKeyUp(eventoDigitado: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>eventoDigitado.target).value;
    console.log((<HTMLInputElement>eventoDigitado.target).value);

  }

  salvarDado(dado: any) {
    this.valorSalvo = dado;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
