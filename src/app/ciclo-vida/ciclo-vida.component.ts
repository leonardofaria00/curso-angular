import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit {

  constructor() {
    this.log('constructor');
   }

  ngOnInit(): void {
    this.log('ngOnInit');

  }

  ng

  private log(hook: string) {
    console.log(hook);

  }

}
