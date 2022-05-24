import { Sequelize } from 'sequelize';
import { initUserTable } from '../models/db.user.model';
import * as pg from 'pg';

/**
 *
 */
export const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 15432,
    dialectModule: pg
  }
);

/**
 *
 * @returns
 */
export async function initDB() {
  return Promise.all([initUserTable(sequelize)]);
}
