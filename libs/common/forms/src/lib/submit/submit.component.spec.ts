import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { EmxSubmitComponent } from './submit.component';

describe('EmxSubmitComponent', () => {
  let spectator: SpectatorHost<EmxSubmitComponent>;

  const createHost = createHostFactory(EmxSubmitComponent);

  it('should create', () => {
    spectator = createHost(`<emx-submit></emx-submit>`);
    expect(spectator.component).toBeTruthy();
  });

  it('should have submit text', () => {
    spectator = createHost(`<emx-submit>Submit</emx-submit>`);
    expect(spectator.query('button')).toHaveText('Submit');
  });

  it('should have text with button as host', () => {
    spectator = createHost(`<button emx-submit>Submit</button>`);
    expect(spectator.element).toHaveText('Submit');
  });

  it('should be disabled', () => {
    spectator = createHost(`<button disabled="true" emx-submit>Submit</button>`);
    expect(spectator.element.hasAttribute('disabled')).toBeTruthy();
  });

  it('should have svg and button elements', () => {
    spectator = createHost(`<emx-submit>Botão</emx-submit>`);
    expect(spectator.query('svg')).toExist();
    expect(spectator.query('button')).toExist();
  });

});
