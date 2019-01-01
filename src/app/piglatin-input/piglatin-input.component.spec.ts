import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiglatinInputComponent } from './piglatin-input.component';

describe('PiglatinInputComponent', () => {
  let component: PiglatinInputComponent;
  let fixture: ComponentFixture<PiglatinInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiglatinInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiglatinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
