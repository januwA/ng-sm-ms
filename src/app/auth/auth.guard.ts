import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {TokenService} from '../shared/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  async checkLogin(url: string): Promise<boolean> {
    if (this.authService.isLoggedIn || (await this.tokenService.token)) {
      return true;
    }

    // 储存用户进来时的路由
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
