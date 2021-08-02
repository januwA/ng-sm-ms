import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { PreviewImage } from "src/app/shared/interfaces/preview-image.interface";
import { UploadService } from "./upload.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import * as _ from "lodash";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.styl"],
})
export class UploadComponent implements OnInit, OnDestroy {
  public previewFiles: PreviewImage[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private uploadService: UploadService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  /**
   * * dispose
   */
  ngOnDestroy() {
    _(this.previewFiles).forEach((file: PreviewImage) => {
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
    if (files.length <= 0) return;
    let _files: PreviewImage[] = this._createPreviewImages(files);

    // 每次上传，将过滤掉重复项，用[file.name]过滤
    this.previewFiles = _.unionWith<PreviewImage>(
      this.previewFiles,
      _files,
      this._equalName
    );
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
    return _.map(_.toArray(files), (file) => {
      const src = window.URL.createObjectURL(
        new Blob([file], {
          type: file.type,
        })
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
    _.pull(this.previewFiles, file);
  }

  /**
   * * 点击[全部上传]，上传所有的图片
   * * 上传完毕清理预览图片
   * TODO: 大型图片上传失败，但还是提示上传成功
   */
  async uploadAll() {
    if (!this.previewFiles.length) return;
    await this.uploadService.uploadAll(this.previewFiles);
    this.clearPreviewImages();
  }

  /**
   * 单张上传
   * 上传成功删除图片
   * @param image
   */
  async upload(image: PreviewImage) {
    await this.uploadService.uploadImage(image);
    if (image.success) {
      _.pull(this.previewFiles, image);
    }
  }

  /**
   * * 清理上传成功的图片
   */
  clearPreviewImages() {
    this.previewFiles = this.previewFiles.filter((image) => !image.success);
  }
}
