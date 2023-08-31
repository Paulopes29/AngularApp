import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exercice } from '../../classes/exercice';
import { Categorie } from '../../classes/categorie';
import { Utilisateur } from 'src/app/classes/utilisateur';
import { ExerciceEtape } from 'src/app/classes/exerciceEtape';

@Injectable({
  providedIn: 'root'
})
export class ApiExoService {

  constructor(private http: HttpClient) { }
  //#region  "Exercices"
  getAllExercices(): Observable<Exercice[]> {
    return this.http.get<Exercice[]>("https://localhost:7243/api/Exercice/GetExercices");
  }

  getExercicesByCategorie(categorie: string) {
    return this.http.get<Exercice[]>("https://localhost:7243/api/Exercice/GetExercicesByCategorie/" + categorie);
  }

  CreateExercice(exo: Exercice) {
    return this.http.post<Exercice>("https://localhost:7243/api/Exercice/AddExercice", exo);
  }

  CreateEtapeExercice(etape: ExerciceEtape) {
    return this.http.post<ExerciceEtape>("https://localhost:7243/api/Exercice/AddEtape", etape);
  }

  getEtapesByExerciceId(exerciceId: number) {
    return this.http.get<ExerciceEtape[]>("https://localhost:7243/api/Exercice/GetEtapesByExerciceId/" + exerciceId);
  }


  //#endregion

  //#region "Categories"
  getAllCategories() {
    return this.http.get<Categorie[]>("https://localhost:7243/api/Categorie/GetCategories");
  }
  //#endregion

  //#region  Utilisateurs
  CreateUtilisateur(user: Utilisateur) {
    return this.http.post<Utilisateur>("https://localhost:7243/api/Utilisateur/AddUtilisateur", user);
  }

  GetUtilisateur(user: Utilisateur) {
    return this.http.post<Utilisateur>("https://localhost:7243/api/Utilisateur/GetUtilisateur", user);
  }
  //#endregion

}
