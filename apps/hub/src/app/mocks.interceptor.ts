import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Injectable()
export class MocksInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(req.url);

    switch (req.url) {
      case '/api/hello':
        return this.getHello();
      case '/api/schedule':
        return this.getSchedule();
    }

    return next.handle(req);
  }

  getHello() {
    return this.http
      .get('mocks/hello.json')
      .pipe(map((data) => new HttpResponse({ status: 200, body: data })));
  }

  getSchedule() {
    return this.http
      .get('mocks/schedule.json')
      .pipe(map((data) => new HttpResponse({ status: 200, body: data })));
  }
}
