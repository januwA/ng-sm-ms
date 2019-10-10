import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {SMMSImage} from 'src/app/shared/interfaces/upload-history.interface';
import {DeleteImage} from 'src/app/shared/interfaces/delete-image.interface';

import * as _ from 'lodash';
import * as ClipboardJS from 'clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {
  public images: SMMSImage[] = [];

  public imagesLoading: boolean = true;

  constructor(private homeService: HomeService) {}

  async ngOnInit() {
    this.imagesLoading = true;
    const images = await this.homeService.images();
    if (images && !_.isEmpty(images)) {
      this.images = images.reverse();
      new ClipboardJS('.image-url-button');
    } else {
      this.images = [];
    }
    this.imagesLoading = false;
  }

  /**
   * 永久删除图片资源
   */
  async delete(hash: string) {
    const {success, message}: DeleteImage = await this.homeService.deleteImage(
      hash,
    );

    // 删除成功更新ui
    if (success) {
      this.images = this.images.filter(f => f.hash != hash);
    } else {
      alert(`删除失败: ${message}`);
    }
  }

  /**
   * * 显示原图
   * @param url
   */
  open(url: any) {
    window.open(url);
  }
}
