import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../../session/session.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _sessionService: SessionService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let auth = this._sessionService.getToken();

    if (!auth) {
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${auth}`
      }
    });
    return next.handle(request);

  }

}