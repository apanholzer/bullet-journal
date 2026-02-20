import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icons } from '../icons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colorpalette',
  imports: [Icons, CommonModule],
  standalone: true,
  templateUrl: './colorpalette.html',
  styleUrl: './colorpalette.css',
})
export class Colorpalette {
  @Input() palettes: any[] = [];
  @Input() currentIdx: number = 0;
  @Input() selectedColor: string = '';

  @Output() colorChange = new EventEmitter<string>();
  @Output() paletteNext = new EventEmitter<void>();
  @Output() palettePrev = new EventEmitter<void>();

  selectColor(color: string) {
    this.colorChange.emit(color);
  }
}
