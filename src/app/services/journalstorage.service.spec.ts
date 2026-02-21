import { TestBed } from '@angular/core/testing';

import { JournalstorageService } from './journalstorage.service';

describe('JournalstorageService', () => {
  let service: JournalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
