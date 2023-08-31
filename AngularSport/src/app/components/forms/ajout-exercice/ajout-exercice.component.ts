import { Component, OnInit } from '@angular/core';
import { Exercice } from '../../../classes/exercice';
import { ApiExoService } from '../../service/api-exo.service';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from '../../../classes/categorie';
import { NgForm } from '@angular/forms';
import { CurrentExoService } from '../../service/current-exo.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../service/current-user.service';

@Component({
  selector: 'app-ajout-exercice',
  templateUrl: './ajout-exercice.component.html',
  styleUrls: ['./ajout-exercice.component.scss']
})
export class AjoutExerciceComponent implements OnInit {
  categories: Categorie[] | undefined;


  constructor(
    private apiService: ApiExoService,
    private toastr: ToastrService,
    private currentExo: CurrentExoService,
    private router: Router,
    private currentUser: CurrentUserService
  ) { }

  ngOnInit() {

    this.currentUser.isLogged().subscribe({
      next: logged => {
        if (logged) {
          this.apiService.getAllCategories().subscribe({
            next: data => {
              this.categories = data;
            },
            error: error => {
              this.toastr.error('Probleme de chargement des categories');
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

  SaveData(data: Exercice, form: NgForm) {
    console.warn(data);
    this.apiService.CreateExercice(data).subscribe({
      next: data => {
        this.currentExo.SetCurrentExoCreation(data);
        this.router.navigate(['AjoutEtape']);
        this.toastr.success('Sauvegarde Reussi');
      },
      error: error => {
        this.toastr.error('Probleme de sauvegarde');
      }
    })
  }
}
