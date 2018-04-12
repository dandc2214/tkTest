import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaTextComponent } from './pregunta-text.component';

describe('PreguntaTextComponent', () => {
  let component: PreguntaTextComponent;
  let fixture: ComponentFixture<PreguntaTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
