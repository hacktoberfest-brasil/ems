import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EmxRadioOptionComponent } from './radio-option.component';

describe('SpecComponent', () => {
  let spectator: Spectator<EmxRadioOptionComponent>;
  const createComponent = createComponentFactory(EmxRadioOptionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
