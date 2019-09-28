import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {uploadUrl} from '../../shared/api-urls';
import {TokenService} from '../../shared/token.service';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  /**
   * 上传图片组，单张递归上传
   * @param files
   */
  async upload(files: any[]): Promise<any> {
    if (files.length === 0) {
      return true;
    }

    const data = new FormData();
    const file = files[0];
    data.append('smfile', file);
    const r = await this.http
      .post<any>(uploadUrl, data, {
        headers: {
          Authorization: `${await this.tokenService.token}`,
        },
      })
      .toPromise();

    if (!r.success) {
      const s: string = `
      ${file.name}
      message: ${r.message}
      `;

      alert(s);
    }
    return this.upload(files.slice(1));
  }
}
