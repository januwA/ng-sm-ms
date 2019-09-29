import {Injectable} from '@angular/core';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _tokenKey = 'login_token';
  private _token: string = '';

  constructor() {
    this.token.then(token => {
      this._token = token || '';
    });
  }

  getAuthorizationToken(): string {
    return this._token;
  }
  get token(): Promise<string> {
    return this.getToken();
  }

  /**
   * * 把token字符串保存起来
   * @param token
   */
  setToken(token: string): Promise<string> {
    return localforage.setItem(this._tokenKey, token);
  }

  /**
   * 获取保存的token
   */
  getToken(): Promise<string> {
    return localforage.getItem(this._tokenKey);
  }

  /**
   * * 清理掉token
   */
  removeToken(): Promise<void> {
    return localforage.removeItem(this._tokenKey);
  }
}
