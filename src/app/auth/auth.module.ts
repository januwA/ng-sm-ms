import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from '../mat/mat.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    SharedModule
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
