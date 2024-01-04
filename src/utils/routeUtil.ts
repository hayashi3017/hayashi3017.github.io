import { route } from '@/constant/route'

function getAllRoutes() {
  return Object.values(route).flatMap((routeGroup) =>
    Object.values(routeGroup).map((routeUnit) => routeUnit),
  )
}

function getAllPaths() {
  return getAllRoutes().map((routeUnit) => routeUnit.path)
}

export const routeUtil = {
  getAllRoutes,
  getAllPaths,
}
