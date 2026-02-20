import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JournalEntry } from '../models/journal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private apiUrl = 'https://localhost:7183/api/Journal';

  constructor(private http: HttpClient) {}

  getJournals(): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(this.apiUrl);
  }

  saveJournal(name: string, color: string): Observable<JournalEntry[]> {
    const url = `${this.apiUrl}?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}`;
    return this.http.post<JournalEntry[]>(url, {});
  }
}
