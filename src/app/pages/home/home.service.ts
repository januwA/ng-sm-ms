import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from 'src/app/auth/auth.service';
import {UserInfo} from 'src/app/shared/interfaces/user-profile.interface';
import {uploadHistoryUrl, deleteUrl} from 'src/app/shared/api-urls';
import {
  UploadHistory,
  SMMSImage,
} from 'src/app/shared/interfaces/upload-history.interface';
import {DeleteImage} from 'src/app/shared/interfaces/delete-image.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  async images(): Promise<SMMSImage[]> {
    const r = await this.http
      .post<UploadHistory>(uploadHistoryUrl, null, {
        observe: 'response',
      })
      .toPromise();

    if (r.status == 200) {
      return r.body.data;
    } else {
      alert('获取图片失败');
    }
  }

  async getUserInfo(): Promise<UserInfo> {
    const r = await this.authService.profile();
    if (r.status == 200) {
      return r.body.data;
    } else {
      alert('获取用户信息失败!!!');
    }
  }

  /**
   * 永久删除image
   * @param id 图片hash
   */
  async deleteImage(id: string): Promise<DeleteImage> {
    return this.http.get<DeleteImage>(deleteUrl + `/${id}`).toPromise();
  }
}
