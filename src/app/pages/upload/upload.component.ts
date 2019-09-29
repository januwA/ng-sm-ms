import {Component, OnInit, OnDestroy} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {PreviewImage} from 'src/app/shared/interfaces/preview-image.interface';
import {UploadService} from './upload.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.styl'],
})
export class UploadComponent implements OnInit, OnDestroy {
  public files: PreviewImage[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private uploadService: UploadService,
  ) {}

  ngOnInit() {}

  /**
   * * dispose
   */
  ngOnDestroy() {
    _(this.files).forEach((file: PreviewImage) => {
      window.URL.revokeObjectURL(file.src);
    });
  }

  hadler(e: any) {
    e.preventDefault();
  }

  /**
   * * 拖拽时获取图片
   * @param e
   */
  dropEvent(e: any) {
    e.preventDefault();
    this._setFiles(e.dataTransfer.files);
  }

  /**
   * * 点击上传获取图片
   * @param e
   */
  onFileChange(e: any) {
    this._setFiles(e.target.files);
  }

  /**
   * * 记录图片
   * @param files
   */
  private _setFiles(files: any[]) {
    if (files.length <= 0) return null;
    let _files: PreviewImage[] = this._createPreviewImages(files);

    // 每次上传，将过滤掉重复项，用[file.name]过滤
    this.files = _.unionWith<PreviewImage>(this.files, _files, this._equalName);
  }

  /**
   * 过滤掉name相同的图片
   * @param a
   * @param b
   */
  private _equalName(a: PreviewImage, b: PreviewImage): boolean {
    return a.file.name === b.file.name;
  }

  /**
   * 使用 file[] 创建 PreviewImage[]
   * @param files fileList
   */
  private _createPreviewImages(files: any[]): PreviewImage[] {
    // 避免假数组
    return _.map(_.toArray(files), file => {
      const src = window.URL.createObjectURL(
        new Blob([file], {
          type: file.type,
        }),
      );

      return {
        // see also:  https://angular.io/guide/security#xss
        src: this.sanitizer.bypassSecurityTrustUrl(src),
        file,
      } as PreviewImage;
    });
  }

  /**
   * * 查看原图
   */
  displayOriginalImage(url: any) {
    window.open(url.changingThisBreaksApplicationSecurity);
  }

  /**
   * * 删除预览图片
   */
  deletePreviewImage(file: PreviewImage) {
    _.pull(this.files, file);
  }

  /**
   * * 点击[全部上传]，上传所有的图片
   * * 上传完毕清理预览图片
   * TODO: 大型图片上传失败，但还是提示上传成功
   */
  async uploadAll() {
    await this.uploadService.upload(_.toArray(this.files).map(f => f.file));
    alert('全部已上传...');
    this.clearPreviewImages();
  }

  /**
   * * 清理所有预览图片
   */
  clearPreviewImages() {
    this.files = [];
  }
}
