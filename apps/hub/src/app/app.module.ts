import { MocksInterceptor } from './mocks.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { NxActionModule } from '@aposin/ng-aquila/action';
import { NxSidebarModule } from '@aposin/ng-aquila/sidebar';
import { NxBreadcrumbModule } from '@aposin/ng-aquila/breadcrumb';
import { NxIconModule } from '@aposin/ng-aquila/icon';

import { EmxCheckboxModule, EmxRadioModule, EmxSubmitModule } from '@emx/forms';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const mocksProvider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: MocksInterceptor,
  multi: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'agenda',
          pathMatch: 'full'
        },
        {
          path: 'agenda',
          loadChildren: () =>
            import('./feature/schedule/schedule.module').then(
              (m) => m.ScheduleModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    NxExpertModule,
    NxActionModule,
    NxSidebarModule,
    NxBreadcrumbModule,
    NxIconModule,
    EmxCheckboxModule,
    EmxRadioModule,
    EmxSubmitModule
  ],
  providers: [MocksInterceptor, environment.mocks ? mocksProvider : []],
  bootstrap: [AppComponent],
})
export class AppModule {}
