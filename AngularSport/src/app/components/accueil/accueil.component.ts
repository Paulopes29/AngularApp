import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Utilisateur } from 'src/app/classes/utilisateur';
import { CurrentUserService } from '../service/current-user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  constructor(
    private router: Router,
    private currentUser: CurrentUserService
  ) {
    console.log("currentUser : " +
      currentUser.getConnectedUser())
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
