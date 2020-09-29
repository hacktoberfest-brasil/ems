import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormsComponent, CheckboxComponent, RadioComponent],
  exports: [FormsComponent, CheckboxComponent, RadioComponent],
})
export class FormsModule {}
