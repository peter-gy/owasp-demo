export enum ApiEndpoint {
  FillDb = '/db/fill',
  ExecuteSqlQuery = '/db/query',
  FindUserById = '/db/findUser'
}

export interface BaseResponse<T> {
  success: boolean;
  payload?: T;
  message?: string;
}
