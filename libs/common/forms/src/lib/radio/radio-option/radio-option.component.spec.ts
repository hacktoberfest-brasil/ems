import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmxRadioOptionComponent } from './radio-option.component';

describe('EmxRadioOptionComponent', () => {
  let component: EmxRadioOptionComponent;
  let fixture: ComponentFixture<EmxRadioOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmxRadioOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmxRadioOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
