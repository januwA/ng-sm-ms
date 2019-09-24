import * as qs from 'querystring';

import {Injectable} from '@angular/core';
import {LoginToken} from './interfaces/token.interface';
import {HttpClient} from '@angular/common/http';
import {UrlTree, Router} from '@angular/router';

import {LoginInfo} from './interfaces/login-info.interface';
import {TokenService} from '../shared/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    public router: Router,
    private tokenService: TokenService,
  ) {}

  private _defaultRedirectUrl: string = '/home';
  public isLoggedIn = false;

  /**
   * * 存储URL，以便我们在登录后可以重定向
   * * 默认重定向到 `/home`
   */
  private _redirectUrl: string | UrlTree;

  get redirectUrl(): string | UrlTree {
    return this._redirectUrl
      ? this.router.parseUrl(this._redirectUrl as string)
      : this._defaultRedirectUrl;
  }

  set redirectUrl(url: string | UrlTree) {
    this._redirectUrl = url;
  }

  private _loginUrl: string = 'https://sm.ms/api/v2/token';

  async login(body: LoginInfo): Promise<boolean> {
    const r = await this.http
      .post<LoginToken>(this._loginUrl, qs.stringify(body), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
      .toPromise();

    if (r.data && r.data.token) {
      this.tokenService.setToken(r.data.token);
      this.isLoggedIn = true;
      return true;
    }

    this.isLoggedIn = false;
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
