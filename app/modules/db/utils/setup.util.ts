import { Sequelize } from 'sequelize';
import { initUserTable } from '../models/db.user.model';
import * as pg from 'pg';
import { initSubjectTable } from '../models/db.subject.model';
import { POSTGRES_CONFIG } from '@modules/config/config';

const {
  POSTGRES_DB: database,
  POSTGRES_USER: username,
  POSTGRES_PASSWORD: password,
  POSTGRES_HOST: host,
  POSTGRES_PORT: port
} = POSTGRES_CONFIG;

/**
 * The `Sequelize` instance to be used across the application.
 */
export const sequelize = new Sequelize(database, username, password, {
  dialect: 'postgres',
  dialectModule: pg,
  host,
  port
});

/**
 * Initialize the database.
 * @returns { Promise<[void, void]>}
 */
export async function initDB() {
  return Promise.all([initUserTable(sequelize), initSubjectTable(sequelize)]);
}
