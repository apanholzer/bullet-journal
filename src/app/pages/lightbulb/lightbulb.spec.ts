import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lightbulb } from './lightbulb';

describe('Lightbulb', () => {
  let component: Lightbulb;
  let fixture: ComponentFixture<Lightbulb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lightbulb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lightbulb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
