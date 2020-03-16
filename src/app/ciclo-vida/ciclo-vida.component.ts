import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit {


  valor: number = 0;
  deletarCiclo: boolean = false;

  constructor() {
    this.log('constructor');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

  getSoma() {
    this.valor++;
  }

  getDeletarCiclo() {
    this.log('destroi');
    this.deletarCiclo = true;
  }

}
