import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent implements OnInit {

  nome: string = 'Leonardo Faria dos Santos';
  urlImagem = 'http://lorempixel.com/400/200/sports';


  constructor() { }

  getImagem() {
    return this.urlImagem;
  }

  ngOnInit(): void {
  }

}
