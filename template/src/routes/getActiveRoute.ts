/**
 * Gets the current screen from navigation state
 * @param state
 */
const getActiveRoute = state => {
  const route = state.routes[state.index]

  if (route.state) {
    // Dive into nested navigators
    return getActiveRoute(route.state)
  }

  return route
}

export default getActiveRoute
