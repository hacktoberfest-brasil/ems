import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmxRadioComponent } from './radio.component';

describe('EmxRadioComponent', () => {
  let component: EmxRadioComponent;
  let fixture: ComponentFixture<EmxRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmxRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
