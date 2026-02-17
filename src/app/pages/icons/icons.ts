import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icons',
  imports: [CommonModule],
  templateUrl: './icons.html',
  styleUrl: './icons.css',
})
export class Icons {
  @Input() type: 'right' | 'left' = 'right';
}
