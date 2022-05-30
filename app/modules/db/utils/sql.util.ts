import { QueryOptionsWithType, QueryTypes } from 'sequelize/types';
import { sequelize } from './setup.util';
import { UserModel } from '@modules/db/models/db.user.model';

export function executeSQLQuery(query: string, options?: QueryOptionsWithType<QueryTypes>) {
  return sequelize.query(query, options);
}

export function findUserById(id: number) {
  return UserModel.findOne({
    where: {
      id
    }
  });
}
