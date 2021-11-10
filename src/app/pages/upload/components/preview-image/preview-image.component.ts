import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PreviewImage} from 'src/app/shared/interfaces/preview-image.interface';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.sass'],
})
export class PreviewImageComponent implements OnInit {
  @Input()
  image: PreviewImage;

  @Output() delete = new EventEmitter<any>();
  @Output() zoomIn = new EventEmitter<any>();
  @Output() upload = new EventEmitter<any>();

  get uploadError(): boolean {
    return this.image.success === false;
  }

  /**
   * 删除
   */
  handleDelete() {
    this.delete.emit();
  }

  /**
   * 放大
   */
  handleZoomIn() {
    this.zoomIn.emit();
  }

  /**
   * 上传（单张）图片
   */
  handleUpload() {
    this.upload.emit();
  }

  constructor() {}

  ngOnInit() {}
}
