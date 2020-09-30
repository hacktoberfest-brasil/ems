import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EmxRadioOptionComponent } from './radio-option.component';

describe('EmxRadionOptionComponent', () => {
  let spectator: Spectator<EmxRadioOptionComponent>;
  const createComponent = createComponentFactory(EmxRadioOptionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
