import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent implements OnInit {

  nome: string = 'Leonardo Faria dos Santos';
  urlImagem = 'https://picsum.photos/id/237/200/300';


  constructor() { }

  getImagem() {
    return this.urlImagem;
  }

  ngOnInit(): void {
  }

}
