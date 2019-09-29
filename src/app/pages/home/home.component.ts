import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';
import {UserInfo} from 'src/app/shared/interfaces/user-profile.interface';
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
  public userInfo: UserInfo;
  public userInfoLoading: boolean = true;

  get diskUsageValue(): number {
    const {disk_usage_raw, disk_limit_raw} = this.userInfo;
    return (disk_usage_raw / disk_limit_raw) * 100;
  }
  private _images: SMMSImage[] = [];

  set images(images: SMMSImage[]) {
    this._images = images;
  }
  get images(): SMMSImage[] {
    if (_.isEmpty(this._images)) {
      return [];
    }
    return this._images.reverse();
  }
  public imagesLoading: boolean = true;

  constructor(private homeService: HomeService) {}

  async ngOnInit() {
    this.userInfoLoading = true;
    this.userInfo = await this.homeService.getUserInfo();
    this.userInfoLoading = false;

    this.imagesLoading = true;
    this.images = await this.homeService.images();
    this.imagesLoading = false;
    new ClipboardJS('.image-url-button');
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
