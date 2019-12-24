import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginInfo } from '../../shared/interfaces/login-info.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
  ) { }

  /**
   * 登陆中
   */
  public landing: boolean = false;

  /**
   * * 表单[验证失败]或[登陆中]都将禁用按钮
   */
  get formInvalid(): boolean {
    return this.loginForm.invalid || this.landing;
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() { }

  /**
   * * 点击登录按钮
   * 调用登陆服务，登陆成功后重定向路由
   */
  async onSubmit() {
    this.landing = true;
    const body: LoginInfo = this.loginForm.value;
    await this.authService.login(body);
    this.landing = false;
    if (this.authService.isLoggedIn) {
      // 登陆成功后重定向
      this.router.navigateByUrl(this.authService.redirectUrl);
    }
  }
}
