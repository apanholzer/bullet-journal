import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Icons } from '../icons/icons';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, Icons],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  notebookName = '';

  selectedColor = '#f5e6c8';
  currentPalette: number = 0;

  colorPalettes: string[][] = [
    ['#caffbf', '#fdffb6', '#ffd6a5', '#ffadad', '#ffc6ff', '#bdb2ff', '#9bf6ff', '#a0c4ff'],
    ['#c8f5e6', '#e6f5c8', '#f5e6c8', '#fabebe', '#f5c8e6', '#e6c8f5', '#c8e6f5', '#bebcf5'],
    ['#ffffff', '#e6e3e3', '#d1d1d1', '#bfbfbf', '#a6a2a2', '#808080', '#5e5e5e', '#3b3a3a'],
  ];

  setColor(color: string) {
    this.selectedColor = color;
  }

  nextPalette() {
    this.currentPalette = (this.currentPalette + 1) % this.colorPalettes.length;
  }

  prevPalette() {
    this.currentPalette =
      (this.currentPalette - 1 + this.colorPalettes.length) % this.colorPalettes.length;
  }
}
