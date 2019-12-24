import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
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
  constructor(private http: HttpClient) {}

  async images(): Promise<SMMSImage[]> {
    const r: HttpResponse<UploadHistory> = await this.http
      .get<UploadHistory>(uploadHistoryUrl, {
        observe: 'response',
      })
      .toPromise();

    if (r.status == 200 && r.body.success) {
      return r.body.data;
    } else {
      alert('获取图片失败');
      return [];
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
