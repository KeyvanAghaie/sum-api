// src/app/components/counter/counter.component.ts

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CounterComponent {
  // Property to hold the current count, initialized to 0
  count: number = 0;

  // Method to increment the count
  increment(): void {
    this.count++;
  }

  // Method to decrement the count, but never below 0
  decrement(): void {
    if (this.count > 0) { 
      this.count--;
    }
  }
}