import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import {Observable} from 'rxjs';
import {smMsString, smMsUrl} from '../shared/api-urls';
import {TokenService} from '../shared/token.service';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(smMsString)) {
      let dataUrl = req.url;
      const authToken = this.tokenService.getAuthorizationToken();

      // 拦截 /ms-sm/xxx的url，并生成新的url
      const urlPath: string = dataUrl.replace(new RegExp(`^${smMsString}`), '');
      dataUrl = `${smMsUrl}/${urlPath}`;

      const secureReq = req.clone({
        url: dataUrl,
        setHeaders: {Authorization: authToken},
      });
      return next.handle(secureReq);
    } else {
      return next.handle(req);
    }
  }
}
