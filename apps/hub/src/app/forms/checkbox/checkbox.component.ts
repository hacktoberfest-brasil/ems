import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap } from 'rxjs/operators';

export interface CheckboxToggleState {
  checked: boolean;
}

/** Change event object emitted by a CheckboxToggleComponent. */
export interface CheckboxToggleChange {
  /** The source CheckboxToggle of the event. */
  readonly source: CheckboxComponent;
  /** The new `checked` value of the CheckboxToggle. */
  readonly checked: boolean;
}

let seekId = 0;

@Component({
  selector: 'emx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentStore],
})
export class CheckboxComponent {
  private _id = `emx-checkbox-${seekId++}`;
  public get id() {
    return this._id;
  }
  @Input()
  public set id(value) {
    this._id = value;
  }
  @Input() set checked(value: boolean) {
    this.setChecked(value);
  }
  // Observable<MatSlideToggleChange> used instead of EventEmitter
  @ViewChild('input') inputElement: ElementRef<HTMLInputElement>;

  readonly setChecked = this.componentStore.updater(
    (state, value: boolean) => ({ ...state, checked: value })
  );

  // ViewModel for the component
  readonly vm$ = this.componentStore.select((state) => ({
    checked: state.checked,
  }));

  constructor(
    private readonly componentStore: ComponentStore<CheckboxToggleState>
  ) {
    // set defaults
    this.componentStore.setState({
      checked: false,
    });
  }

  onChangeEvent = this.componentStore.effect<Event>((event$) => {
    return event$.pipe(
      tap<Event>((event) => {
        event.stopPropagation();
        this.setChecked(this.inputElement.nativeElement.checked);
      })
    );
  });
}
