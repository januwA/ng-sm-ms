import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from '../http-interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [httpInterceptorProviders],
})
export class CoreModule {}
