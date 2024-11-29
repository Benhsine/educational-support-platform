/*
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/student/home/home.component';
import { CoursesComponent } from './pages/student/courses/courses.component';
import { QuizComponent } from './pages/student/quiz/quiz.component';
import { UserProfileComponent } from './pages/student/user-profile/user-profile.component';
import { ProgressComponent } from './pages/student/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'quizzes', component: QuizComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'dashboard', component: ProgressComponent }
];
*/
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/student/home/home.component';
import { CoursesComponent } from './pages/student/courses/courses.component';
import { QuizComponent } from './pages/student/quiz/quiz.component';
import { UserProfileComponent } from './pages/student/user-profile/user-profile.component';
import { ProgressComponent } from './pages/student/dashboard/dashboard.component';
import { ProfessorDashboardComponent } from './pages/professor/dashboard/professor-dashboard.component';
import { ManageCoursesComponent } from './pages/professor/courses/professor-courses.component';
import { ManageQuizzesComponent } from './pages/professor/quiz/professor-quiz.component';
import { ManageResourcesComponent } from './pages/professor/manage-resources/manage-resources.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  // Routes accessibles à tous
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // Routes pour les étudiants
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'quizzes', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: ProgressComponent, canActivate: [AuthGuard] },

  // Routes pour les professeurs (protégées par un rôle spécifique)
  {
    path: 'professor',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'professor' },
    children: [
      { path: '', redirectTo: 'professor-dashboard', pathMatch: 'full' },
      { path: 'professor-dashboard', component: ProfessorDashboardComponent },
      { path: 'manage-courses', component: ManageCoursesComponent },
      { path: 'manage-quizzes', component: ManageQuizzesComponent },
      { path: 'manage-resources', component: ManageResourcesComponent },
    ]
  },

  // Route de secours
  { path: '**', redirectTo: '/' },
];
