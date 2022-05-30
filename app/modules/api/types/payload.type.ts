import { QueryOptionsWithType, QueryTypes } from 'sequelize/types';

export interface ExecuteSqlQueryPayload {
  query: string;
  queryOptions?: QueryOptionsWithType<QueryTypes>;
}

export interface FindUserByIdPayload {
  id: number;
}
