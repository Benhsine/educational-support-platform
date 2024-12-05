import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDashboardComponent } from './admin.component';

describe('DashboardComponent', () => {
  let component: ProfessorDashboardComponent;
  let fixture: ComponentFixture<ProfessorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});