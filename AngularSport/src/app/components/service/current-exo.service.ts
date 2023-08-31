import { Injectable } from '@angular/core';
import { Exercice } from 'src/app/classes/exercice';

@Injectable({
  providedIn: 'root'
})
export class CurrentExoService {
  currentExo: Exercice | undefined
  currentExoCreation: Exercice | undefined
  constructor() { }

  GetCurrentExo() {
    return this.currentExo;
  }

  SetCurrentExo(exo: Exercice) {
    this.currentExo = exo;
  }

  GetCurrentExoCreation() {
    return this.currentExo;
  }

  SetCurrentExoCreation(exo: Exercice) {
    this.currentExoCreation = exo;
  }
}
