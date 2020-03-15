import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  decrementaValor() {
    this.valor--;
    console.log(this.valor);
  }

  incrementaValor() {
    this.valor++;
    console.log(this.valor);
  }
}
