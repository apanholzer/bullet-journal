import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colorpalette } from './colorpalette';

describe('Colorpalette', () => {
  let component: Colorpalette;
  let fixture: ComponentFixture<Colorpalette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colorpalette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colorpalette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
