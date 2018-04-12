import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaCasillasComponent } from './pregunta-casillas.component';

describe('PreguntaCasillasComponent', () => {
  let component: PreguntaCasillasComponent;
  let fixture: ComponentFixture<PreguntaCasillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaCasillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaCasillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
