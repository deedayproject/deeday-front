import { RouteConfig } from 'vue-router';

import defaultRoutes from './default';
import authenticationRoutes from './authentication';

const routes: RouteConfig[] = [
  ...defaultRoutes,
  ...authenticationRoutes,
];

export default routes;

export function selectRoutes(names: string[]): RouteConfig[] {
  return routes.filter((route) => names.includes(route.name!));
}
