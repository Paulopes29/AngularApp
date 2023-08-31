import { Component, OnDestroy } from '@angular/core';
import { ApiExoService } from '../../service/api-exo.service';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from 'src/app/classes/utilisateur';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../service/current-user.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  hide = true;
  sub = new Subscription;

  constructor(
    private apiService: ApiExoService,
    private toastr: ToastrService,
    private router: Router,
    private currentuSer: CurrentUserService
  ) {

  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  CheckData(data: Utilisateur) {
    data.email = data.nomUtilisateur;
    this.sub = this.apiService.GetUtilisateur(data).subscribe({
      next: data => {
        if (data != undefined) {
          this.toastr.success('Bienvenue ' + data.nomUtilisateur);

          this.currentuSer.logIn(data);

          /* this.router.navigateByUrl('/navbar', { skipLocationChange: true }).then(() => {
             this.router.navigate([``]);
           });*/
          this.router.navigate([``]).then(
            window.location.reload
          );

        }
        else {
          this.toastr.error('Utilisateur/mot de passe introuvable');
        }
      },
      error: error => {
        console.warn(error)
        this.toastr.error('Utilisateur/mot de passe introuvable');
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
