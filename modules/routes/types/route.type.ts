/**
 *
 */
export enum Path {
  Home = '/',
  SqlInjection = '/sql-injection',
  BrokenAccess = '/broken-access'
}

/**
 *
 */
export interface Route {
  label: string;
  path: Path;
}
