import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoursesComponent } from './professor-courses.component';

describe('CoursesComponent', () => {
  let component: ManageCoursesComponent;
  let fixture: ComponentFixture<ManageCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
