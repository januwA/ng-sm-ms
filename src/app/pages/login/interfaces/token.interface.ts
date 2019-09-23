export interface LoginToken {
  RequestId: string;
  code: string;
  data: TokenData;
  message: string;
  success: boolean;
}

export interface TokenData {
  token: string;
}
