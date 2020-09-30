import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EmxCheckbox, EmxCheckboxComponent } from './checkbox.component';

describe('SpecComponent', () => {
  let spectator: Spectator<EmxCheckboxComponent>;
  const createComponent = createComponentFactory({
    component: EmxCheckboxComponent,
    imports: [
      FormsModule,
      ReactiveFormsModule,
    ]
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
