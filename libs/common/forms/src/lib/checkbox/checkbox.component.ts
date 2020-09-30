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
  AfterContentInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EventInputTarget } from './../types';
import {
  AbstractControl,
  FormControl,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { EmxControlAccessor } from '../abstractions';

let nextId = 0;

@Injectable()
export class EmxCheckbox extends EmxControlAccessor {
  @Input()
  public set disabled(value: boolean) {
    this._disabled = value;
  }
  @Input()
  public set value(value: any) {
    this._value = value;
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EmxCheckbox, EmxCheckboxProvider],
})
export class EmxCheckboxComponent extends EmxCheckbox
  implements AfterContentInit, AfterViewInit, OnDestroy {
  destroy$ = new Subject<void>();

  @ViewChild('input', { static: true }) _el: ElementRef<HTMLInputElement>;
  get el() {
    return this._el.nativeElement;
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

  control: AbstractControl;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super();
  }

  ngAfterContentInit() {
    this.control = this.ngControl?.control
      ? this.ngControl.control
      : new FormControl();
  }
  ngAfterViewInit() {
    this.ngControl?.control?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => this.valueChange.emit(value));
  }

  onChangeEvent(evt: EventInputTarget) {
    this.onChange(evt.target.value);
    this.checkedChange.emit(evt.target.checked);
    this.valueChange.emit(this.control.value);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
