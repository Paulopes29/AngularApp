import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/classes/utilisateur';
import { ApiExoService } from './api-exo.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  currentUser: Utilisateur | undefined
  constructor(
    private apiservice: ApiExoService
  ) { }

  logIn(utilisateur: Utilisateur) {
    console.warn(this.currentUser)
    this.currentUser = utilisateur;
    console.warn(this.currentUser)

    console.warn("login")
  }

  logOut() {
    this.currentUser = undefined;
  }

  getConnectedUser() {
    console.warn("getuser")
    console.warn(this.currentUser)
    return this.currentUser;
  }

  isLogged(): Observable<boolean> {
    return of(this.currentUser !== undefined);
  }

  isAdminAccount(): Observable<boolean> {
    return of(this.currentUser?.IsAdmin === true);
  }
}
