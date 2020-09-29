import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppScheduleModule } from '@emx/app-schedule';
import { NxTabsModule } from '@aposin/ng-aquila/tabs';

import { ScheduleComponent } from './schedule.component';


const routes: Routes = [
  { path: '', component: ScheduleComponent }
];

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    NxTabsModule,
    AppScheduleModule,
    RouterModule.forChild(routes)
  ]
})
export class ScheduleModule { }
