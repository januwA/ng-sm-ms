import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule],
})
export class MatModule {}
