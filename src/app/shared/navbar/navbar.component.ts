import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  role: string | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    // Get the current user's role
    const user = this.authService.getCurrentUser();
    this.role = user ? user.role : null;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
   // You can fetch this from your authentication service


  // Simulate logout
  login() {
    this.isLoggedIn = true;
  }
}