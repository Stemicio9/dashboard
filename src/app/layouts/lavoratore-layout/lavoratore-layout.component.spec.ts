import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoratoreLayoutComponent } from './lavoratore-layout.component';

describe('LavoratoreLayoutComponent', () => {
  let component: LavoratoreLayoutComponent;
  let fixture: ComponentFixture<LavoratoreLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavoratoreLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavoratoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
