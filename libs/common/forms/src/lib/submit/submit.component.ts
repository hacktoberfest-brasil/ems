import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: `
    emx-submit,
    button[emx-submit]
  `,
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class EmxSubmitComponent {
  @Input()
  public set disabled(value: boolean) {
    this._disabled = value;
  }
  private _disabled: boolean;
  public get disabled(): boolean {
    return this._disabled;
  }

  get el() {
    return this._el.nativeElement;
  }
  get isButton() {
    return this.el?.tagName === 'BUTTON';
  }

  constructor(private _el: ElementRef<HTMLElement>) {}
}
