import { QueryOptionsWithType, QueryTypes } from 'sequelize/types';
import { sequelize } from './setup.util';

export function executeSQLQuery(query: string, options?: QueryOptionsWithType<QueryTypes>) {
  return sequelize.query(query, options);
}
