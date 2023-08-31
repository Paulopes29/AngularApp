import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEtapeExerciceComponent } from './ajout-etape-exercice.component';

describe('AjoutEtapeExerciceComponent', () => {
  let component: AjoutEtapeExerciceComponent;
  let fixture: ComponentFixture<AjoutEtapeExerciceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEtapeExerciceComponent]
    });
    fixture = TestBed.createComponent(AjoutEtapeExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
