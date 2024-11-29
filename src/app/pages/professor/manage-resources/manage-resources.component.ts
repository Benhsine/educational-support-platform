// src/app/pages/professor/manage-resources/manage-resources.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-resources.component.html',
  styleUrls: ['./manage-resources.component.css']
})
export class ManageResourcesComponent implements OnInit {
  resources: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Exemple de ressources factices
    this.resources = [
      { id: 1, type: 'Video', title: 'Introduction to Programming', url: 'https://example.com/video1' },
      { id: 2, type: 'PDF', title: 'Math Fundamentals', url: 'https://example.com/pdf1' },
    ];
  }
  currentDate = Date; // Reference to JavaScript's Date object

  addResource(resource: any): void {
    this.resources.push(resource);
    console.log('Resource added:', resource);
  }

  removeResource(resourceId: number): void {
    this.resources = this.resources.filter(r => r.id !== resourceId);
  }
}
