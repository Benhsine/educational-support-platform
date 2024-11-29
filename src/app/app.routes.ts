// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProgressComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'quizzes', component: QuizComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'dashboard', component: ProgressComponent }
];