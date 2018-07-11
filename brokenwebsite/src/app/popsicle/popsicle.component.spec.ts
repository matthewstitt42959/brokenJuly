import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopsicleComponent } from './popsicle.component';

describe('PopsicleComponent', () => {
  let component: PopsicleComponent;
  let fixture: ComponentFixture<PopsicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopsicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopsicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
