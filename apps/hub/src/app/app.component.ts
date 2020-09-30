import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from '@emx/api-interfaces';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'emx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  form = new FormControl();

  example = new FormGroup({
    checkbox: new FormControl(),
    langs: new FormArray([]),
    radio: new FormControl(),
  });

  langs = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Java',
    'PHP',
    'Go',
    'C'
  ].map((lang) => {
    const c = new FormControl();
    const arr = this.example.get('langs') as FormArray;
    arr.push(new FormControl());
    return lang;
  });

  choices = Object.entries({
    y: 'sim',
    n: 'não',
    m: 'talvez',
  }).map(([k, v]) => ({ k, v }));

  actions = [
    {
      icon: 'file-text',
      label: 'All Files',
      query: { a: 1 },
    },
    {
      icon: 'calendar',
      label: 'Calendar',
      query: { a: 2 },
    },
    {
      icon: 'mail-o',
      label: 'Email',
      query: { a: 3 },
    },
    {
      icon: 'user-business-o',
      label: 'My Profile',
      query: { a: 4 },
    },
    {
      icon: 'file',
      label: 'Recent Downloads',
      query: { a: 5 },
    },
  ];

  breadcrumbs = [
    { link: '', name: 'Home' },
    { link: '', name: 'Insurance' },
    { link: '', name: 'Health Insurance' },
  ];
  dynamicCumbs = this.breadcrumbs;

  public log = console.log;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((navEvent) => navEvent instanceof NavigationEnd))
      .subscribe((nav: NavigationEnd) => {
        console.log(nav);
      });
  }
  goToItem(i: number) {
    this.dynamicCumbs = this.breadcrumbs.slice(0, i + 1);
  }

  onCheckboxChange(data?) {
    console.log('data: ', data);
  }
}
