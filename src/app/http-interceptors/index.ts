import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {NoopInterceptor} from './noop-interceptor';

/**
 * 把http拦截器搜集起来
 */
export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
];
