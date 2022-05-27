const appPortLocal = 3000;
const appPortDocker = 3000;

const dbPortLocal = 15432;
const dbPortDocker = 5432;

const dbHostLocal = 'localhost';
const dbHostDocker = 'owasp-demo-postgres';

const isDev = process.env.NODE_ENV === 'development';
console.log(`Running in ${isDev ? 'development' : 'production'} mode`);

const API_BASE_URL = isDev
  ? `http://localhost:${appPortLocal}/api`
  : `http://localhost:${appPortDocker}/api`;
const POSTGRES_DB = process.env.POSTGRES_DB as string;
const POSTGRES_USER = process.env.POSTGRES_USER as string;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;
const POSTGRES_HOST = isDev ? dbHostLocal : dbHostDocker;
const POSTGRES_PORT = isDev ? dbPortLocal : dbPortDocker;

/**
 * Environment-aware Next.js API configuration
 */
export const API_CONFIG = {
  API_BASE_URL
};

/**
 * Environment-aware Postgres configuration
 */
export const POSTGRES_CONFIG = {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT
};
