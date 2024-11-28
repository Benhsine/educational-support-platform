// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MOCK_COURSES } from '../mock-data';
/*
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api'; // Adjust to your backend URL

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/courses`);
  }

  getCourseDetails(courseId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/courses/${courseId}`);
  }
}
*/



@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses(): Observable<any[]> {
    return of(MOCK_COURSES);
  }
}