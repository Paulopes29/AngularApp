import { Component } from '@angular/core';
import { ApiExoService } from '../../service/api-exo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UtilisateurDTO } from 'src/app/classes/utilisateurDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true;
  hideValidation = true;

  constructor(
    private apiService: ApiExoService,
    private toastr: ToastrService,
    private router: Router
  ) { }


  SaveData(data: UtilisateurDTO) {

    const user = {
      email: data.email,
      nomUtilisateur: data.nomUtilisateur,
      password: data.password,
      IsAdmin: data.IsAdmin
    }

    this.apiService.CreateUtilisateur(user).subscribe({
      next: data => {
        this.toastr.success('Compte créé avec succès');
        this.router.navigate([`login`]);
      },
      error: error => {
        this.toastr.error('Probleme de création');
      }
    })
  }
}

