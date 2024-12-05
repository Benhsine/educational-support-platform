

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../../services/progress-tracking.service';

@Component({
  selector: 'professor-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class ProfessorDashboardComponent implements OnInit {
  progressData: any[] = []; // Array to hold progress tracking data

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    this.progressService.getProgressData().subscribe(
      data => (this.progressData = data)
    );
  }
}

