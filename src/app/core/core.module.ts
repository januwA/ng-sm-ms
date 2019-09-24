import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [ReactiveFormsModule, HttpClientModule, FormsModule],
})
export class CoreModule {}
