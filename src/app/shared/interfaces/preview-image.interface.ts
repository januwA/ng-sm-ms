export interface PreviewImage {
  readonly src: any;
  readonly file: any;

  /**
   * 上传进度 0-100
   */
  progress: number;


  /**
   * 是否上传成功
   */
  success: boolean;

  /**
   * 上传失败显示信息
   */
  message: string;
}
