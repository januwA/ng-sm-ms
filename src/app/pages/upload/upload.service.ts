import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {uploadUrl} from '../../shared/api-urls';
import {TokenService} from '../../shared/token.service';
import {throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

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
      .post<any>(uploadUrl, data)
      .pipe(
        retry(3), // 重试失败的请求，最多3次
        catchError(this.handleError),
      )
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // 发生客户端或网络错误。 相应地处理它。
      console.error('An error occurred:', error.error.message);
    } else {
      // 后端返回的响应代码失败。
      // 响应主体可能包含有关出了什么问题的线索，
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`,
      );
    }
    // 返回可观察到的并带有面向用户的错误消息
    return throwError('Something bad happened; please try again later.');
  }
}
