import { Injectable } from '@angular/core';
import { iStep } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class StepService {

  public iStep: iStep[] = [{
    title: 'Dedica moltes hores',
    description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    img:'./assets/img/time_managment.svg',
    bgcolor: 'rgb(53, 179, 168)'
  },{
    title: 'Programa projectes propis:',
    description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
    img:'./assets/img/programming.svg',
    bgcolor: 'rgb(202, 224, 230)'
  },{
    title: 'Procura descansar:',
    description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    img:'./assets/img/meditation.svg',
    bgcolor: 'rgb(247, 226, 103)'
  }]

  constructor() { }
}
