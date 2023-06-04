import { BlogRoute } from './BlogRoute'
import { TechRoute } from './TechRoute'

const BaseRoute = {
  path: '/',
  name: 'home',
} as const

export const RootRoute = {
  root: BaseRoute,
  blog: BlogRoute,
  tech: TechRoute,
}
