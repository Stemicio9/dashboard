import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoreLayoutComponent } from './datore-layout.component';

describe('DatoreLayoutComponent', () => {
  let component: DatoreLayoutComponent;
  let fixture: ComponentFixture<DatoreLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatoreLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
