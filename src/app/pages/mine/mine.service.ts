import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/shared/interfaces/user-profile.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MineService {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  async getUserInfo(): Promise<UserInfo> {
    const r = await this.authService.profile();
    if (r.status == 200) {
      return r.body.data;
    } else {
      alert('获取用户信息失败!!!');
    }
  }

  /**
   * * 退出登陆，重定向登陆页面
   */
  async logout() {
    await this.authService.logout();
    await this.router.navigateByUrl('/login');
  }
}
