import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmxRadioComponent } from './radio.component';
import { EmxRadioOptionComponent } from './radio-option/radio-option.component';

export * from './radio.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [EmxRadioComponent, EmxRadioOptionComponent],
  exports: [EmxRadioComponent, EmxRadioOptionComponent]
})
export class EmxRadioModule { }
