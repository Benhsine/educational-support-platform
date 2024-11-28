// src/app/services/quiz.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<any[]> {
    return this.http.get<any[]>('/api/quizzes');
  }

  startQuiz(quizId: string): Observable<any> {
    return this.http.get(`/api/quizzes/${quizId}/start`);
  }

  submitQuiz(quizResults: any): Observable<any> {
    return this.http.post('/api/quizzes/submit', quizResults);
  }
}