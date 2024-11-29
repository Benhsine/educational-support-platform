// src/app/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const expectedRole = route.data['role'];

    if (!user || user.role !== expectedRole) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}