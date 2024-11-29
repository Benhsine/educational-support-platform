// src/app/pages/professeurs/courses/professor-courses.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-professor-courses',
  templateUrl: './professor-courses.component.html',
  styleUrls: ['./professor-courses.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ManageCoursesComponent implements OnInit {
  courses: any[] = [];
  isModalOpen = false;
  resourceType: 'videos' | 'pdfs' | 'quizzes' = 'videos';
  newResource = '';
  selectedCourseId: number | null = null;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => (this.courses = courses));
  }

  openResourceModal(courseId: number, type: 'videos' | 'pdfs' | 'quizzes') {
    this.selectedCourseId = courseId;
    this.resourceType = type;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.newResource = '';
    this.selectedCourseId = null;
  }

  addResource() {
    if (this.selectedCourseId && this.newResource) {
      this.courseService
        .addResource(this.selectedCourseId, this.resourceType, this.newResource)
        .subscribe(() => {
          this.closeModal();
          this.ngOnInit(); // Refresh the list
        });
    }
  }
}
