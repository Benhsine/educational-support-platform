import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-professor-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.css']
})
export class ProfessorProfileComponent implements OnInit {
  user: any = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

  editProfile(): void {
    console.log('Edit Profile clicked');
    // Add logic for editing the user profile, e.g., navigate to a form
  }

  logout(): void {
    this.authService.logout();
  }
}