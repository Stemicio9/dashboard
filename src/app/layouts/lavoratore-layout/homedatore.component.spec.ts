import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedatoreComponent } from './homedatore.component';

describe('HomedatoreComponent', () => {
  let component: HomedatoreComponent;
  let fixture: ComponentFixture<HomedatoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedatoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
