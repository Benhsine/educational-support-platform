/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressTrackingService {

  constructor() { }
}
*/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PROGRESS } from '../mock-data'; // Import mock progress data

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  getProgressData(): Observable<any[]> {
    return of(MOCK_PROGRESS); // Return mock progress data
  }
}
