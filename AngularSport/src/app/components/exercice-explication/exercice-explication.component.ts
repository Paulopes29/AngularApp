import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentExoService } from '../service/current-exo.service';
import { Exercice } from 'src/app/classes/exercice';
import { ExerciceEtape } from 'src/app/classes/exerciceEtape';
import { ApiExoService } from '../service/api-exo.service';
import { etapesCountPipe } from '../customPipe/pipe';

@Component({
  selector: 'app-exercice-explication',
  templateUrl: './exercice-explication.component.html',
  styleUrls: ['./exercice-explication.component.scss'],
  providers: [etapesCountPipe]
})

export class ExerciceExplicationComponent implements OnInit {
  exercice: Exercice | undefined
  etapes: ExerciceEtape[] | undefined
  nombreEtapes = ""

  constructor(
    private router: Router,
    private currentExo: CurrentExoService,
    private apiService: ApiExoService,
    private pipe: etapesCountPipe
  ) {

  }
  ngOnInit(): void {

    if (this.currentExo.GetCurrentExo() == undefined) {
      this.goToPage(``)
    }


    this.exercice = this.currentExo.GetCurrentExo()
    this.apiService.getEtapesByExerciceId(this.exercice?.id ?? 0).subscribe(data => {
      this.etapes = data
      this.nombreEtapes = this.pipe.transform(data);
    })


  }


  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}


