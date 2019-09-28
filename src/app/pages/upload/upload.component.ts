import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PreviewImage } from 'src/app/shared/interfaces/preview-image.interface';
import { UploadService } from './upload.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.styl'],
})
export class UploadComponent implements OnInit {
  public files: PreviewImage[];

  constructor(
    private sanitizer: DomSanitizer,
    private uploadService: UploadService,
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.files) {
      _(this.files).forEach(file => {
        window.URL.revokeObjectURL(file.src);
      });
    }
  }
  hadler(e) {
    e.preventDefault();
  }
  dropEvent(e) {
    e.preventDefault();
    const files = [];  //e.target.files 返回的值为空，换一种方式来获取File
    [].forEach.call(e.dataTransfer.files, function (file) {
      files.push(file);
    }, false);
    let _files: any[] = Array.from(files);
    _files = _files.map<PreviewImage>(file => {
      const src = window.URL.createObjectURL(
        new Blob([file], {
          type: file.type,
        }),
      );

      return {
        // see also:  https://angular.io/guide/security#xss
        src: this.sanitizer.bypassSecurityTrustUrl(src),
        file,
      };
    });

    if (this.files) {
      this.files.push(..._files);
    } else {
      this.files = _files;
    }
    this.uploadAll();
  }

  onFileChange(e) {
    if (0 > e.target.files) return null;
    let _files: any[] = Array.from(e.target.files);
    _files = _files.map<PreviewImage>(file => {
      const src = window.URL.createObjectURL(
        new Blob([file], {
          type: file.type,
        }),
      );

      return {
        // see also:  https://angular.io/guide/security#xss
        src: this.sanitizer.bypassSecurityTrustUrl(src),
        file,
      };
    });

    if (this.files) {
      this.files.push(..._files);
    } else {
      this.files = _files;
    }
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
  deletePreviewImage(file) {
    this.files = this.files.filter(f => f !== file);
  }

  /**
   * * 上传所有的图片
   */
  async uploadAll() {
    await this.uploadService.upload(this.files.map(f => f.file));
    alert('全部已上传...');
  }
}
