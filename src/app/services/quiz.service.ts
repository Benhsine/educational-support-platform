import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_QUIZ } from '../mock-data'; // Import mock quiz data

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuiz(): Observable<any> {
    return of(MOCK_QUIZ); // Return mock quiz data
  }
}
