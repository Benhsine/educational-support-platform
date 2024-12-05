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
/*
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
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
    if (typeof window !== 'undefined') {
      let user = null;

      if (username === 'student' && password === 'student') {
        user = { role: 'student' };
      } else if (username === 'professor' && password === 'professor') {
        user = { role: 'professor' };
      }

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return true;
      }
    }
    return false;
  }

  logout() {
    if (typeof window !== 'undefined') {
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

  getUserRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  isAuthenticated(): boolean {
    return this.userSubject.getValue() !== null;
  }
}
*/
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface RegisterUserDto {
  name: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  role: 'ETUDIANT' | 'PROF' | 'ADMIN';
  department?: string;
  specialization?: string;
  major?: string;
  yearOfStudy?: number;
}

export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  status: string;
  token?: string;
}

export interface UserProfile {
  id?: number;
  name: string;
  email: string;
  role: 'ETUDIANT' | 'PROF' | 'ADMIN';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private readonly BASE_URL = 'https://rest-apis-fwdra5adgjdyf4fp.germanywestcentral-01.azurewebsites.net/authentication';
  
  private userSubject = new BehaviorSubject<UserProfile | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.checkTokenOnStartup();
  }

  // Safe localStorage wrapper
  private getLocalStorage(): Storage | null {
    return isPlatformBrowser(this.platformId) ? localStorage : null;
  }

  // Safe method to get item from localStorage
  private getItem(key: string): string | null {
    const storage = this.getLocalStorage();
    return storage ? storage.getItem(key) : null;
  }

  // Safe method to set item in localStorage
  private setItem(key: string, value: string): void {
    const storage = this.getLocalStorage();
    if (storage) {
      storage.setItem(key, value);
    }
  }

  // Safe method to remove item from localStorage
  private removeItem(key: string): void {
    const storage = this.getLocalStorage();
    if (storage) {
      storage.removeItem(key);
    }
  }

  register(userData: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.BASE_URL}/register`, userData);
  }

  login(loginData: LoginRequestDTO): Observable<boolean> {
    return this.http.post<LoginResponseDto>(`${this.BASE_URL}/login`, loginData)
      .pipe(
        map(response => {
          if (response.status === 'Success' && response.token) {
            // Store token safely
            this.setItem('jwtToken', response.token);
            
            // Decode token to get user info
            const decodedToken = this.decodeToken(response.token);
            
            const userProfile: UserProfile = {
              name: decodedToken.name,
              email: decodedToken.email,
              role: decodedToken.role
            };

            this.userSubject.next(userProfile);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    // Remove token from storage
    this.removeItem('jwtToken');
    
    // Clear user subject
    this.userSubject.next(null);
    
    // Navigate to login page
    this.router.navigate(['/login']);
  }

  private checkTokenOnStartup() {
    // Only check token in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getItem('jwtToken');
      if (token) {
        const decodedToken = this.decodeToken(token);
        if (decodedToken) {
          const userProfile: UserProfile = {
            name: decodedToken.name,
            email: decodedToken.email,
            role: decodedToken.role
          };
          this.userSubject.next(userProfile);
        } else {
          this.logout();
        }
      }
    }
  }

  // Simple JWT token decoder
  private decodeToken(token: string): any {
    try {
      if (!isPlatformBrowser(this.platformId)) {
        return null;
      }
      
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }

  // Utility methods
  isAuthenticated(): boolean {
    return !!this.getItem('jwtToken');
  }

  getCurrentUser(): UserProfile | null {
    return this.userSubject.getValue();
  }

  getUserRole(): string | null {
    return this.getCurrentUser()?.role || null;
  }

  getAuthToken(): string | null {
    return this.getItem('jwtToken');
  }
}
