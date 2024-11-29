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
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_USER } from '../mock-data'; // Import mock user data

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  getRole(): string | null {
    return localStorage.getItem('role'); // Par exemple : "professor" ou "student"
  }
  getUserProfile(): Observable<any> {
    return of(MOCK_USER); // Return mock user profile data
  }
}
