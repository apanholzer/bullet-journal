import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  notebookName = '';

  selectedColor = '#f5e6c8';

  colors: string[] = [
    '#f5e6c8',
    '#c8f5e6',
    '#e6c8f5',
    '#f5c8e6',
    '#c8e6f5',
    '#e6f5c8',
    '#aaeeb5',
    '#b7b9b2',
  ];

  setColor(color: string) {
    this.selectedColor = color;
  }
}
