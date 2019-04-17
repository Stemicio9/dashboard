import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelaoratoreComponent } from './homelaoratore.component';

describe('HomelaoratoreComponent', () => {
  let component: HomelaoratoreComponent;
  let fixture: ComponentFixture<HomelaoratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelaoratoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelaoratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
