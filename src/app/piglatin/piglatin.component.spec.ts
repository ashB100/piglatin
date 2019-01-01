import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiglatinComponent } from './piglatin.component';

describe('PiglatinComponent', () => {
  let component: PiglatinComponent;
  let fixture: ComponentFixture<PiglatinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiglatinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiglatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
