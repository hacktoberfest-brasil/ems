import { Component, OnInit } from '@angular/core';
import { ScheduleDataService } from '@emx/app-schedule';

@Component({
  selector: 'emx-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(
    private scheduleDataService: ScheduleDataService
  ) { }

  ngOnInit(): void {

  }

}
