import { Component, Input } from '@angular/core';
import { iStep } from '../interfaces/interfaces';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})

export class EscenaComponent {

  @Input()
  public escenaList: iStep[] = [];

  public currentStep: number = 0;

  backStep(): void {
    if(this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.currentStep = this.escenaList.length -1
    }
  }

  nextStep(): void {
    if(this.currentStep < this.escenaList.length -1) {
      this.currentStep++
    } else {
      this.currentStep = 0
    }
  }

  activeStep(): void {
    this.currentStep = this.escenaList.length;
  }
}

