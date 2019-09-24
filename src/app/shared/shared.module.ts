import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedBoxComponent } from './components/sized-box/sized-box.component';
import { ImageSizePipe } from './pipes/image-size.pipe';

@NgModule({
  declarations: [SizedBoxComponent, ImageSizePipe],
  imports: [
    CommonModule
  ],
  exports: [SizedBoxComponent, ImageSizePipe]
})
export class SharedModule { }
