import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSizePipe } from './pipes/image-size.pipe';

@NgModule({
  declarations: [ImageSizePipe],
  imports: [
    CommonModule
  ],
  exports: [ImageSizePipe]
})
export class SharedModule { }
