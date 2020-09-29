import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ScheduleDataService } from '../schedule-data.service';
import { Timeline } from '@emx/core/entities';

@Component({
  selector: 'emx-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  @Input() items;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;

  timeline$: Observable<Timeline>;

  constructor(private scheduleDataService: ScheduleDataService) {}

  ngOnInit(): void {
    this.timeline$ = this.scheduleDataService
      .getTimeline(
        this.dayIndex,
        this.queryText,
        this.excludeTracks,
        this.segment
      ).pipe(
        tap(console.log)
      )
      // .subscribe((data: any) => {
      //   this.shownSessions = data.shownSessions;
      //   this.groups = data.groups;
      //   console.log('data: ', data);

      // });
  }
}
