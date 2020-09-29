import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ScheduleDataService } from '../schedule-data.service';

import { DEFAULT_ICONS } from '@aposin/ng-aquila/icon';

@Component({
  selector: 'emx-schedule-filter',
  templateUrl: './schedule-filter.component.html',
  styleUrls: ['./schedule-filter.component.scss'],
})
export class ScheduleFilterComponent implements OnInit {
  searchTerm1: string;
  searchTerm2: string;

  constructor(public scheduleDataService: ScheduleDataService) {
  }

  ngOnInit(): void {
    // console.log(Object.keys(DEFAULT_ICONS));
    this.scheduleDataService.load();
  }
}
