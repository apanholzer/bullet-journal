import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JournalService } from '../../services/journal.service';
import { JournalstorageService } from '../../services/journalstorage.service';
import { Lightbulb } from '../lightbulb/lightbulb';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, Lightbulb],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {
  private journalService = inject(JournalService);
  public journalStorage = inject(JournalstorageService);
  isLoaded: boolean = false;
  buttonText: string = 'Start New Journal';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadAll();
  }

  onLightToggle(isOn: boolean) {
    this.journalStorage.onLightToggle(isOn);
  }

  loadAll() {
    this.journalService.getJournals().subscribe({
      next: (data) => {
        this.journalStorage.allJournals = data;
      },
      error: (err) => console.error('Backend nicht erreichbar?', err),
    });
  }

  startNewJournal() {
    if (!this.isLoaded) {
      this.journalStorage.notebookName = '';
      this.journalStorage.selectedColor = '';
    }
    this.router.navigate(['/home']);
  }

  onLoadJournal(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = Number(selectElement.value);

    const journal = this.journalStorage.allJournals.find((j) => j.id === selectedId);

    if (journal) {
      this.journalStorage.notebookName = journal.journalname;
      this.journalStorage.selectedColor = journal.color;
      this.isLoaded = true;
      this.buttonText = 'Open This Journal';
    } else {
      this.buttonText = 'Start New Journal';
    }
  }
}
