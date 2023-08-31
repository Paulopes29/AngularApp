import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Exercice } from '../../classes/exercice';
import { ApiExoService } from '../service/api-exo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.scss'],

})
export class ExerciceListComponent implements OnInit {

  exercices: Exercice[] | undefined;
  categorie: string = "";

  constructor(
    private apiService: ApiExoService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.router.url === "/Biceps") {
      this.categorie = "Biceps"
    }
    else if (this.router.url === "/Deltoides") {
      this.categorie = "Deltoides"
    }
    else if (this.router.url === "/AvantBras") {
      this.categorie = "Avant Bras"
    }
    else if (this.router.url === "/Triceps") {
      this.categorie = "Triceps"
    }


    console.warn(this.categorie)
    this.apiService.getExercicesByCategorie(this.categorie).subscribe({
      next: data => {

        this.exercices = data;
      },
      error: error => {
        this.toastr.error('Probleme de chargement', error.message);
      }
    })
  }

}
