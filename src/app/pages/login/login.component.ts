// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
                  <label for="username" class="form-label">Nom d'utilisateur</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="username" 
                    [(ngModel)]="username" 
                    name="username" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Mot de passe</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    [(ngModel)]="password" 
                    name="password" 
                    required
                  >
                </div>
                <button type="submit" class="btn btn-primary">Se connecter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Simple mock authentication
    if (this.username === 'student' && this.password === 'student') {
      localStorage.setItem('user', JSON.stringify({ role: 'student' }));
      this.router.navigate(['/dashboard']);
    } else if (this.username === 'professor' && this.password === 'professor') {
      localStorage.setItem('user', JSON.stringify({ role: 'professor' }));
      this.router.navigate(['/professor/dashboard']);
    } else {
      alert('Identifiants incorrects');
    }
  }
}