import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imageSize',
})
export class ImageSizePipe implements PipeTransform {
  private _base = 1024;

  transform(value: number, args?: any): string {
    if (value < this._base) {
      return value + ' B';
    } else {
      return (value / 1024).toFixed(2) + ' KB';
    }
  }
}
