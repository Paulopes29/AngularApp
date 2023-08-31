import { Component, OnInit } from '@angular/core';
import { Exercice } from '../../../classes/exercice';
import { ApiExoService } from '../../service/api-exo.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm, NgModel } from '@angular/forms';
import { ExerciceEtape } from 'src/app/classes/exerciceEtape';
import { CurrentExoService } from '../../service/current-exo.service';
import { CurrentUserService } from '../../service/current-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajout-etape-exercice',
  templateUrl: './ajout-etape-exercice.component.html',
  styleUrls: ['./ajout-etape-exercice.component.scss']
})
export class AjoutEtapeExerciceComponent implements OnInit {
  exercices: Exercice[] | undefined;
  currentExo: Exercice | undefined;
  selected = 0;

  constructor(
    private apiService: ApiExoService,
    private toastr: ToastrService,
    private currentExoService: CurrentExoService,
    private currentUser: CurrentUserService,
    private router: Router
  ) { }


  ngOnInit() {

    this.currentUser.isLogged().subscribe({
      next: logged => {
        if (logged) {
          this.apiService.getAllExercices().subscribe({
            next: data => {
              this.exercices = data;
              this.currentExo = this.currentExoService.GetCurrentExoCreation()
              this.selected = this.currentExo?.id ?? 0;
            },
            error: error => {
              this.toastr.error('Probleme de chargement des exercices');
            }
          })
        }
        else {
          this.toastr.error('Il faut se logger avant');
          this.router.navigate(['login']);
        }
      },
    })

  }

  SaveData(data: ExerciceEtape, form: NgForm) {
    console.warn(data);
    this.apiService.CreateEtapeExercice(data).subscribe({
      next: data => {
        this.toastr.success('Sauvegarde Reussi');
        form.reset();
      },
      error: error => {
        this.toastr.error('Probleme de sauvegarde');
      }
    })
  }
}