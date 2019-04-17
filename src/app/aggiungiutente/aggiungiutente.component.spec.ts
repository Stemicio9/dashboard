import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiutenteComponent } from './aggiungiutente.component';

describe('AggiungiutenteComponent', () => {
  let component: AggiungiutenteComponent;
  let fixture: ComponentFixture<AggiungiutenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiutenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
