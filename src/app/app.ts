import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Welcome } from './pages/welcome/welcome';

@Component({
  selector: 'app-root',
  imports: [Welcome, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('journal-app');
}
