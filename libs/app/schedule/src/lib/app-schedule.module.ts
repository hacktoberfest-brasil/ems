import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NxPageSearchModule } from '@aposin/ng-aquila/page-search';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxAutocompleteModule } from '@aposin/ng-aquila/autocomplete';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxHeaderModule } from '@aposin/ng-aquila/header';

import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleFilterComponent } from './schedule-filter/schedule-filter.component';

export const appScheduleRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NxPageSearchModule,
    NxFormfieldModule,
    NxInputModule,
    NxAutocompleteModule,
    NxIconModule,
    NxCardModule,
    NxLinkModule,
    NxHeaderModule,
  ],
  declarations: [ScheduleComponent, ScheduleFilterComponent],
  exports: [ScheduleComponent, ScheduleFilterComponent],
})
export class AppScheduleModule {}
