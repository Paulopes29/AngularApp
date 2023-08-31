import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { provideToastr } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ExerciceListComponent } from './components/exercice-list/exercice-list.component';
import { AjoutExerciceComponent } from './components/forms/ajout-exercice/ajout-exercice.component';
import { LoginComponent } from './components/forms/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './components/forms/register/register.component';
import { ExerciceExplicationComponent } from './components/exercice-explication/exercice-explication.component';
import { AjoutEtapeExerciceComponent } from './components/forms/ajout-etape-exercice/ajout-etape-exercice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    AccueilComponent,
    ExerciceListComponent,
    AjoutExerciceComponent,
    LoginComponent,
    RegisterComponent,
    ExerciceExplicationComponent,
    AjoutEtapeExerciceComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatStepperModule,
    MatCheckboxModule
  ],
  providers: [provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule {

}
