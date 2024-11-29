import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any = null; // Holds user data, initially null

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.userProfileService.getUserProfile().subscribe(
      user => (this.user = user)
    );
  }

  editProfile(): void {
    console.log('Edit Profile clicked');
    // Add logic for editing the user profile, e.g., navigate to a form
  }
}
