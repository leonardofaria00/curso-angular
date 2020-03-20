import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: any[];

  constructor(private service: PessoaService) {
    this.service
      .listFormUser()
      .subscribe(pessoas => this.pessoas = pessoas);
  }

  ngOnInit(): void {
  }
}
