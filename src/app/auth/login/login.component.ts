import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { LoginInfo } from "../../shared/interfaces/login-info.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  /**
   * 登陆中
   */
  public loading: boolean = false;

  /**
   * * 表单[验证失败]或[登陆中]都将禁用按钮
   */
  get formInvalid(): boolean {
    return this.loginForm.invalid || this.loading;
  }

  loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  ngOnInit() {}

  /**
   * * 点击登录按钮
   * 调用登陆服务，登陆成功后重定向路由
   */
  async onSubmit() {
    this.loading = true;
    const body: LoginInfo = this.loginForm.value;
    const success = await this.authService.login(body);
    this.loading = false;
    if (success) this.router.navigateByUrl(this.authService.redirectUrl);
  }
}
