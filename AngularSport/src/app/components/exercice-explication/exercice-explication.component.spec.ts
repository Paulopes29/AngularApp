import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceExplicationComponent } from './exercice-explication.component';

describe('ExerciceExplicationComponent', () => {
  let component: ExerciceExplicationComponent;
  let fixture: ComponentFixture<ExerciceExplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceExplicationComponent]
    });
    fixture = TestBed.createComponent(ExerciceExplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
