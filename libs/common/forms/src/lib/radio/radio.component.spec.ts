import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EmxRadioComponent } from './radio.component';

describe('SpecComponent', () => {
  let spectator: Spectator<EmxRadioComponent>;
  const createComponent = createComponentFactory(EmxRadioComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
