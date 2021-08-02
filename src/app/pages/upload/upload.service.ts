import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
  HttpEvent,
  HttpEventType,
} from "@angular/common/http";
import { uploadUrl } from "../../shared/api-urls";
import { TokenService } from "../../shared/token.service";
import { throwError } from "rxjs";
import { catchError, retry, last, tap, map } from "rxjs/operators";
import { PreviewImage } from "src/app/shared/interfaces/preview-image.interface";
import { UploadImage } from "src/app/shared/interfaces/upload-image.interface";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  /**
   * 上传图片组，单张递归上传
   * @param previewImages
   */
  async uploadAll(previewImages: PreviewImage[]): Promise<any> {
    if (!previewImages.length) return true;
    const image: PreviewImage = previewImages[0];
    await this.uploadImage(image);
    return this.uploadAll(previewImages.slice(1));
  }

  /**
   * 上传到图床
   * @param image
   */
  public async uploadImage(image: PreviewImage): Promise<UploadImage> {
    const data = new FormData();
    const file = image.file;
    data.append("smfile", file);

    // see also: https://angular.cn/guide/http#listening-to-progress-events
    const req = new HttpRequest("POST", uploadUrl, data, {
      reportProgress: true,
    });

    const r = await this.http
      .request<UploadImage>(req)
      .pipe(
        tap((event) => {
          // 设置进度
          if (event.type === HttpEventType.UploadProgress) {
            let progress = Math.round((100 * event.loaded) / event.total);
            image.progress = progress;
          } else if (event.type === HttpEventType.Response) {
            image.progress = 100;
          }
        }),
        map((event) => {
          // 上传完成返回响应body
          if (event.type === HttpEventType.Response) {
            return event.body;
          }
        }),
        last() // 向呼叫者返回最后一条（完成的）消息
      )
      .toPromise();

    image.success = r.success;
    image.message = r.message;

    return r;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // 发生客户端或网络错误。 相应地处理它。
      console.error("An error occurred:", error.error.message);
    } else {
      // 后端返回的响应代码失败。
      // 响应主体可能包含有关出了什么问题的线索，
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // 返回可观察到的并带有面向用户的错误消息
    return throwError("Something bad happened; please try again later.");
  }
}
