export enum ApiEndpoint {
  FillDb = '/db/fill',
  ExecuteSqlQuery = '/db/query'
}

export interface BaseResponse<T> {
  success: boolean;
  payload?: T;
  message?: string;
}
