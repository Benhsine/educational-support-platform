// src/app/shared/navbar/navbar.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule, CommonModule]
})
export class NavbarComponent {
  role: string = 'student'; // Example default role

  logout(): void {
    console.log('Utilisateur déconnecté');
    // Add logout logic here
  }
}
