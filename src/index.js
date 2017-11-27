export const generateRoutes = routes => Array.from(routes).map(route => {
  const path = route.paths.shift()
  const alias = route.paths
  return Object.assign({}, route, { path, alias })
})
