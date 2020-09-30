import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import {
  Spectator,
  SpectatorHost,
  createHostFactory,
  createComponentFactory,
} from '@ngneat/spectator';


import { EmxRadioComponent } from './radio.component';
import { EmxRadioOptionComponent } from './radio-option';

const VIEWS = {
  onlyOne: `
    <emx-radio [formControl]="form">
      <emx-radio-option value="1">1</emx-radio-option>
    </emx-radio>
  `,
  withOptions: `
    <emx-radio [formControl]="form">
      <emx-radio-option *ngFor="let c of choices" [value]="c.k">{{ c.v }}</emx-radio-option>
    </emx-radio>
  `,
  withCustomId: `
    <emx-radio-option id="x" value="1">1</emx-radio-option>
  `,
};

const OPTIONS = Array.from(['HTML', 'CSS']);

@Component({ selector: 'emx-custom-form', template: '' })
class CustomFormComponent {
  form = new FormControl();
  choices = OPTIONS;
}

describe('EmxRadioComponent', () => {
  describe('Host', () => {
    let spectator: SpectatorHost<EmxRadioComponent, CustomFormComponent>;
    const createHost = createHostFactory({
      component: EmxRadioComponent,
      host: CustomFormComponent,
      declarations: [EmxRadioOptionComponent],
      imports: [ReactiveFormsModule],
    });

    describe('Views', () => {
      it('should display only one option', () => {
        spectator = createHost(VIEWS.onlyOne);
        expect(spectator.query('.emx-radio')).toMatchSnapshot();
      });

      it('should display radio with options', () => {
        spectator = createHost(VIEWS.withOptions);
        expect(spectator.query('.emx-radio')).toMatchSnapshot();
      });
    });

    describe('Props', () => {
      it('should display only one option', () => {
        spectator = createHost(VIEWS.onlyOne);
        const input = spectator.queryAll('emx-radio-option');
        expect(input.length).toEqual(1);
      });

      it('should create an instance with 2 options', () => {
        spectator = createHost(VIEWS.withOptions);
        const input = spectator.queryAll('emx-radio-option');
        expect(input.length).toEqual(2);
      });
    });
  });

  describe('Forms', () => {
    let spectator: Spectator<EmxRadioComponent>;
    const createComponent = createComponentFactory({
      component: EmxRadioComponent,
      imports: [FormsModule, ReactiveFormsModule],
    });

    it('should create', () => {
      spectator = createComponent();
      expect(spectator.component).toBeTruthy();
    });

    it('should value changed if set value', () => {
      spectator.component.control.setValue('abc');
      expect(spectator.component.control.value).toBe('abc');
    });

    it('should value changed if set value', async () => {
      spyOn(spectator.component.valueChange, 'emit');
      spectator.component.control.valueChanges.subscribe(() => {
        expect(spectator.component.onChangeEvent).toBeCalledTimes(1);
        expect(spectator.component.valueChange.emit).toBeCalledTimes(1);
        expect(spectator.component.checkedChange.emit).toBeCalledTimes(1);
      });
      spectator.component.control.setValue('qwe');
    });
  });
});

