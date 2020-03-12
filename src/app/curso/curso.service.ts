import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  /**
   * getCursos
   */
  public getCursos() {
    return ['JavaScript', 'TypeScript', 'Angular', 'OO Melhores Técnicas com Java',
      'Design Patterns Java', 'SOLID', 'Spring Boot', 'Webservice Rest', 'Webservice SOAP'];
  }
}
