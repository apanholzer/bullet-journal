import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homeicon } from './homeicon';

describe('Homeicon', () => {
  let component: Homeicon;
  let fixture: ComponentFixture<Homeicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homeicon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homeicon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
