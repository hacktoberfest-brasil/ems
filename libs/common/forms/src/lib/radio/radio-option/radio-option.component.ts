import { EventInputTarget } from './../../types/events.type';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

let nextId = 0;

@Component({
  selector: 'emx-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmxRadioOptionComponent {
  @ViewChild('input', { static: true }) _el: ElementRef<HTMLInputElement>;
  get el() {
    return this._el.nativeElement;
  }

  name: string;

  public _value: any;
  public get value(): any {
    return this._value;
  }

  @Input()
  public set value(value: any) {
    this._value = value;
  }

  @Input()
  public set id(value: string) {
    this._id = value;
  }
  public get id(): string {
    return this._id;
  }
  private _id = `emx-radio-option-${nextId++}`;

  @Output()
  checkedChange = new EventEmitter<EmxRadioOptionComponent>();

  onChangeEvent() {
    this.checkedChange.emit(this);
  }
}
