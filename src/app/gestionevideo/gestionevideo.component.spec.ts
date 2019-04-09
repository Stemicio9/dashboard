import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionevideoComponent } from './gestionevideo.component';

describe('GestionevideoComponent', () => {
  let component: GestionevideoComponent;
  let fixture: ComponentFixture<GestionevideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionevideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
