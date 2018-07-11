import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxwellComponent } from './maxwell.component';

describe('MaxwellComponent', () => {
  let component: MaxwellComponent;
  let fixture: ComponentFixture<MaxwellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxwellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
