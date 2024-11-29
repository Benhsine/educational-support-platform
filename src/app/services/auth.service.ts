// src/app/services/auth.service.ts
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Adjust to your backend URL
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  register(userDetails: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userDetails);
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }
}
  */
 /*
 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api.yourplatform.com/auth'; // URL de l'API

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role'); // Par exemple : "professor" ou "student"
  }
}

 */
// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  isLoggedIn: boolean = false; 
  user$ = this.userSubject.asObservable();

  constructor(private router: Router) {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.userSubject.next(JSON.parse(storedUser));
      }
    }
  }

  login(username: string, password: string): boolean {
    // Check if running in browser
    if (typeof window !== 'undefined') {
      if (username === 'student' && password === 'student') {
        this.isLoggedIn = true;
        const user = { role: 'student' };
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return true;
      } else if (username === 'professor' && password === 'professor') {
        this.isLoggedIn = true;
        const user = { role: 'professor' };
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return true;
      }
    }
    return false;
  }

  logout() {
    if (typeof window !== 'undefined') {
      this.isLoggedIn = false;
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/login']);
    }
  }

  getCurrentUser() {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  getUserRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }
}