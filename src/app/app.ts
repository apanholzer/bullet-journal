import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Homeicon } from './pages/homeicon/homeicon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homeicon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('journal-app');

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
