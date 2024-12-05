import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginRequestDTO } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Connexion</div>
            <div class="card-body">
              <form (ngSubmit)="onLogin()">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    [(ngModel)]="loginData.email" 
                    name="email" 
                    required
                    email
                  >
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Mot de passe</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    [(ngModel)]="loginData.password" 
                    name="password" 
                    required
                  >
                </div>
                <button type="submit" class="btn btn-primary">Se connecter</button>
                
                <!-- Error message -->
                <div *ngIf="errorMessage" class="alert alert-danger mt-3">
                  {{ errorMessage }}
                </div>
              </form>
              
              <!-- Password reset link -->
              <div class="mt-3">
                <a href="/forgot-password" class="text-muted">Mot de passe oublié ?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  loginData: LoginRequestDTO = {
    email: '',
    password: ''
  };
  
  errorMessage: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onLogin() {
    this.errorMessage = ''; // Clear any previous error messages

    this.authService.login(this.loginData).subscribe({
      next: (Success) => {
        if (Success) {
          const user = this.authService.getCurrentUser();
          
          // Route based on user role
          if (user?.role === 'ETUDIANT') {
            this.router.navigate(['/student/dashboard']);
          } else if (user?.role === 'PROF') {
            this.router.navigate(['/professor/dashboard']);
          } else if (user?.role === 'ADMIN') {
            this.router.navigate(['/admin/dashboard']);
          } else {
            // Fallback route if role is not recognized
            this.router.navigate(['/']);
          }
        } else {
          this.errorMessage = 'Identifiants incorrects';
        }
      },
      error: (error) => {
        console.error('Login error', error);
        this.errorMessage = 'Une erreur est survenue lors de la connexion';
      }
    });
  }
}