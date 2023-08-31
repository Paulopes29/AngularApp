import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/classes/utilisateur';
import { CurrentUserService } from '../service/current-user.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [DatePipe]
})
export class NavbarComponent implements OnInit {

  utilisateur?: Utilisateur
  isLogged = false;

  myDate = new Date();
  formatedDate = ""
  constructor(
    public currentUser: CurrentUserService,
    private datePipe: DatePipe,
    private router: Router,
  ) {
    this.formatedDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd') ?? "";
  }

  ngOnInit() {
    this.utilisateur = this.currentUser.getConnectedUser()

    console.warn(this.isLogged)
  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  logout() {
    this.currentUser.logOut();
    console.log("log out");
    console.log(this.currentUser);
  }
}
