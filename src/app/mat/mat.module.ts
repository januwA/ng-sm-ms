import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTabsModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule
  ],
})
export class MatModule {}
