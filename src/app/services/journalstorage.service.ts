import { Injectable } from '@angular/core';
import { JournalEntry } from '../models/journal.model';

@Injectable({
  providedIn: 'root',
})
export class JournalstorageService {
  allJournals: JournalEntry[] = [];
  notebookName = '';
  selectedColor = '#f5e6c8';
  isLightOn = true;

  onLightToggle(isOn: boolean) {
    this.isLightOn = isOn;
    if (isOn) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }
}
