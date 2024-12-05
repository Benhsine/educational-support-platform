import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Get the auth token
  const jwtToken = authService.getAuthToken();

  // Clone the request and add authorization header if token exists
  if (jwtToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
  }

  // Handle response
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        // Token is invalid or expired
        authService.logout();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};