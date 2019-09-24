import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';
import {UserInfo} from 'src/app/shared/interfaces/user-profile.interface';
import {HomeService} from './home.service';
import {SMMSImage} from 'src/app/shared/interfaces/upload-history.interface';
import {DeleteImage} from 'src/app/shared/interfaces/delete-image.interface';

import * as ClipboardJS from 'clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {
  public userInfo: UserInfo;

  public images: SMMSImage[];
  public imagesLoading: boolean = true;

  constructor(private homeService: HomeService) {}

  async ngOnInit() {
    this.userInfo = await this.homeService.getUserInfo();

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
}
