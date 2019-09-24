export interface UserProfile {
  success: boolean;
  code: string;
  message: string;

  /**
   * 用户信息
   */
  data: UserInfo;
  RequestId: string;
}

export interface UserInfo {
  /**
   * 用户名
   */
  username: string;

  /**
   * 	邮件地址
   */
  email: string;

  /**
   * 用户组名称
   */
  role: string;

  /**
   * 用户组过期时间
   */
  group_expire: string;

  /**
   * 磁盘使用情况
   */
  disk_usage: string;

  /**
   * 总磁盘空间
   */
  disk_limit: string;

  /**
   * 磁盘使用情况（单位：Byte）
   */
  disk_usage_raw: number;

  /**
   * 总磁盘空间（单位：Byte）
   */
  disk_limit_raw: number;
}
