import { Path } from '../types/route.type';

/**
 *
 * @returns
 */
export function getRoutes() {
  return Object.keys(Path)
    .filter((key) => key.toLowerCase() !== 'home')
    .map((key) => {
      // @ts-ignore
      return getRoute(Path[key]);
    });
}

/**
 *
 * @param path
 * @returns
 */
export function getRoute(path: Path) {
  switch (path) {
    case Path.Home:
      return {
        label: 'Home',
        path: Path.Home
      };
    case Path.SqlInjection:
      return {
        label: 'SQL Injection',
        path: Path.SqlInjection
      };
    case Path.BrokenAccess:
      return {
        label: 'Broken Access',
        path: Path.BrokenAccess
      };
    default:
      throw Error('Unknown path: ' + path);
  }
}
