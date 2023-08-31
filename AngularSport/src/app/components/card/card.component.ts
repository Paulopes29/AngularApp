import { Component, Input, OnInit } from '@angular/core';
import { Exercice } from '../../classes/exercice';
import { Router } from '@angular/router';
import { CurrentExoService } from '../service/current-exo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']

})
export class CardComponent {
  @Input() exercice !: Exercice;
  bodyPart = ""

  constructor(
    private router: Router,
    private currentExo: CurrentExoService,
  ) {
    console.log(this.exercice)
    //this.bodyPart = this.costumPipe.transform(this.exercice.subTitle ?? "")
  }

  ExercicePresentation() {
    this.currentExo.SetCurrentExo(this.exercice)

    this.router.navigate([`explication`])
  }
}

