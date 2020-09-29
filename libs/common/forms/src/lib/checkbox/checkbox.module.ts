import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmxCheckboxComponent } from './checkbox.component';

export * from './checkbox.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [EmxCheckboxComponent],
  exports: [EmxCheckboxComponent]
})
export class EmxCheckboxModule { }
