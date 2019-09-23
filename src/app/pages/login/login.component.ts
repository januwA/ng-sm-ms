import * as qs from 'querystring';

import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { LoginToken } from './interfaces/token.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['ajanuw', Validators.required],
    password: ['nuX4QWVM9Zw9zaG', Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    const body = this.loginForm.value;
    this.http
      .post<LoginToken>('https://sm.ms/api/v2/token', qs.stringify(body), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
      .subscribe(r => {
        console.log(r.data.token);
      });
  }
}
