import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Colorpalette } from '../colorpalette/colorpalette';
import { Lightbulb } from '../lightbulb/lightbulb';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Colorpalette, CommonModule, Lightbulb],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor() {
    document.documentElement.classList.remove('dark');
  }
  onLightToggle(isOn: boolean) {
    if (isOn) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }

  notebookName = '';

  selectedColor = '#f5e6c8';
  currentPalette: number = 0;

  colorPalettes = [
    {
      name: 'bright',
      colors: [
        '#caffbf',
        '#fdffb6',
        '#ffd6a5',
        '#f09191',
        '#ffc6ff',
        '#bdb2ff',
        '#9bf6ff',
        '#a0c4ff',
      ],
    },
    {
      name: 'pastel',
      colors: [
        '#c9e4de',
        '#faedcb',
        '#f7d9c4',
        '#f2b0b0',
        '#f2c6de',
        '#dbcdf0',
        '#b3ebf2',
        '#b3d1e7',
      ],
    },
    {
      name: 'grey',
      colors: [
        '#ffffff',
        '#e6e3e3',
        '#d1d1d1',
        '#bfbfbf',
        '#a6a2a2',
        '#808080',
        '#5e5e5e',
        '#3b3a3a',
      ],
    },
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
