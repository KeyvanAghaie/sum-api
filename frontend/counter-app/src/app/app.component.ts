import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./components/counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app';

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
