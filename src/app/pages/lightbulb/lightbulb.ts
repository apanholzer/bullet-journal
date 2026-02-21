import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalstorageService } from '../../services/journalstorage.service';

@Component({
  selector: 'app-lightbulb',
  imports: [CommonModule],
  templateUrl: './lightbulb.html',
  styleUrl: './lightbulb.css',
})
export class Lightbulb {
  private journalStorage = inject(JournalstorageService);

  get isOn() {
    return this.journalStorage.isLightOn;
  }

  @Output() statusChanged = new EventEmitter<boolean>();

  toggleLight() {
    const newState = !this.isOn;
    this.journalStorage.onLightToggle(newState);
    this.statusChanged.emit(newState);
  }
}
