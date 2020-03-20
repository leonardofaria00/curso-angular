import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  listFormUser() {
    return this.http.get<Pessoa[]>('https://jsonplaceholder.typicode.com/users');
  }
}
