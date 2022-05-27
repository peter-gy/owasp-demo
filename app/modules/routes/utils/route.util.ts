import { Path, Route } from '../types/route.type';

/**
 * @returns all routes except `Home`
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
 * Retrieves the route info based on the supplied `Path`
 * @param path the path to retrieve the route info for
 * @returns the `Route` corresponding to the supplied `Path`
 */
export function getRoute(path: Path): Route {
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
