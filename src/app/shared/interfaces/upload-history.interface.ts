export interface UploadHistory {
  readonly success: boolean;
  readonly message: string;
  readonly code: string;
  readonly RequestId: string;

  data: SMMSImage[];
}

export interface SMMSImage {
  /**
   *  delete: 'https://sm.ms/delete/louSQfVURjxYOqwEprzL53MXIi'
   */
  readonly delete: string;

  /**
   * rilename: '6AB6358CA1EF153ECE59DC1A5E8AC5D3.jpg'
   */
  readonly filename: string;

  /**
   * 图片的hash值
   * hash: 'louSQfVURjxYOqwEprzL53MXIi'
   */
  readonly hash: string;

  /**
   * 图片宽度
   */
  readonly width: number;

  /**
   * 图片高度
   */
  readonly height: number;

  /**
   * 图片大小
   */
  readonly size: number;

  readonly page: string;
  readonly path: string;
  readonly storename: string;

  /**
   * 图片资源地址
   *  url: 'https://i.loli.net/2019/08/09/OvVzMqpF3jmI8lE.jpg'
   */
  readonly url: string;
}
