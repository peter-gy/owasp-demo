/**
 * Possible UI routes
 */
export enum Path {
  Home = '/',
  SqlInjection = '/sql-injection',
  BrokenAccess = '/broken-access'
}

/**
 * Model for a UI route
 */
export interface Route {
  label: string;
  path: Path;
}
