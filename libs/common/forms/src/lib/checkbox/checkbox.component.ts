import {
  Self,
  Input,
  Output,
  Optional,
  ViewChild,
  Component,
  Injectable,
  ElementRef,
  forwardRef,
  OnDestroy,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

let nextId = 0;

type EventInputTarget = Event & {
  target: HTMLInputElement;
};

@Injectable()
export class EmxCheckbox implements ControlValueAccessor {
  protected _disabled: boolean;
  public get disabled(): boolean {
    return this._disabled;
  }
  @Input()
  public set disabled(value: boolean) {
    this._disabled = value;
  }

  protected _value: any;
  public get value(): any {
    return this._value;
  }

  @Input()
  public set value(value: any) {
    this._value = value;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

const EmxCheckboxProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmxCheckbox),
  multi: true,
};

@Component({
  selector: 'emx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [EmxCheckbox, EmxCheckboxProvider],
})
export class EmxCheckboxComponent extends EmxCheckbox
  implements AfterViewInit, OnDestroy {
  destroy$ = new Subject<void>();

  @ViewChild('input', { static: true }) _vm: ElementRef<HTMLInputElement>;
  get vm() {
    return this._vm.nativeElement;
  }

  @Input()
  public set id(value: string) {
    this._id = value;
  }
  public get id(): string {
    return this._id;
  }
  private _id = `emx-checkbox-${nextId++}`;

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  checkedChange = new EventEmitter<boolean>(false);

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super();
  }

  ngAfterViewInit() {
    this.ngControl.control.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => this.valueChange.emit(value));
  }

  onChangeEvent(evt: EventInputTarget) {
    this.onChange(evt.target.value);
    this.checkedChange.emit(evt.target.checked);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
