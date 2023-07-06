const mapping: Record<string, string> = {
  banks: 'bank',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
