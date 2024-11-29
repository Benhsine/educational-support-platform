import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './src/app/pages/professor/quiz/professor-quiz.component.html',
  styleUrls: ['./professor-quiz.component.css']
})
export class ManageQuizzesComponent implements OnInit {
  quiz: any = { questions: [] }; // Mock data will populate this

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuiz().subscribe(
      quiz => (this.quiz = quiz)
    );
  }

  selectOption(questionIndex: number, selectedOption: string) {
    this.quiz.questions[questionIndex].selectedOption = selectedOption;
    console.log(`Selected option for question ${questionIndex + 1}:`, selectedOption);
  }

  submitQuiz() {
    console.log('Quiz submitted:', this.quiz);
    // Add logic for submission, e.g., send answers to a backend
  }
}
