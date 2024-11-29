/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../../services/progress-tracking.service';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class ProgressComponent implements OnInit {
  progressData: any[] = []; // Array to hold progress tracking data

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    this.progressService.getProgressData().subscribe(
      data => (this.progressData = data)
    );
  }
}

