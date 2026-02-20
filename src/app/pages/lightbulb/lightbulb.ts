import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lightbulb',
  imports: [CommonModule],
  templateUrl: './lightbulb.html',
  styleUrl: './lightbulb.css',
})
export class Lightbulb {
  isOn = true;

  @Output() statusChanged = new EventEmitter<boolean>();

  toggleLight() {
    this.isOn = !this.isOn;
    this.statusChanged.emit(this.isOn);
  }
}
