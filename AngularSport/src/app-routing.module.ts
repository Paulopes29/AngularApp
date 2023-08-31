import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './app/components/accueil/accueil.component';
import { ExerciceListComponent } from './app/components/exercice-list/exercice-list.component';
import { AjoutExerciceComponent } from './app/components/forms/ajout-exercice/ajout-exercice.component';
import { LoginComponent } from './app/components/forms/login/login.component';
import { RegisterComponent } from './app/components/forms/register/register.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { AppComponent } from './app/app.component';
import { ExerciceExplicationComponent } from './app/components/exercice-explication/exercice-explication.component';
import { AjoutEtapeExerciceComponent } from './app/components/forms/ajout-etape-exercice/ajout-etape-exercice.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', component: AccueilComponent },
  { path: 'Biceps', component: ExerciceListComponent },
  { path: 'Deltoides', component: ExerciceListComponent },
  { path: 'AvantBras', component: ExerciceListComponent },
  { path: 'Triceps', component: ExerciceListComponent },

  { path: 'navbar', component: NavbarComponent },

  { path: 'AjouterExo', component: AjoutExerciceComponent },
  { path: 'explication', component: ExerciceExplicationComponent },
  { path: 'AjoutEtape', component: AjoutEtapeExerciceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
