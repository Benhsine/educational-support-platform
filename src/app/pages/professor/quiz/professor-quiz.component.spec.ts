import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuizzesComponent } from './professor-quiz.component';

describe('QuizComponent', () => {
  let component: ManageQuizzesComponent;
  let fixture: ComponentFixture<ManageQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageQuizzesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
