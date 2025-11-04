import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medecin } from './medecin.interface';

describe('Medecin', () => {
  let component: Medecin;
  let fixture: ComponentFixture<Medecin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medecin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Medecin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
