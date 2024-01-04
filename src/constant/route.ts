import { routeUtil } from '@/utils/routeUtil'

type RouteUnit = {
  path: string
  name: string
  desc: string
}

type RouteObj = Record<string, RouteUnit>

// TODO: ネストした型を表現したい
// type NestedRouteUnit = T extends RouteUnit ? T['path'] : Test<T[keyof T]>

// 処理系を楽にするため、RouteObj型に合わせている
const rootRoute = {
  root: {
    path: '/',
    name: 'サイトのトップページ',
    desc: 'ホームページです。技術ブログや日常系やあれこれ・・アウトプットの場として活用します。',
  },
} as const

const articleRoute = {
  root: {
    path: '/article',
    name: 'ブログのトップページ',
    desc: '技術ブログです。エンジニアとして、技術的なことをまとめていきたいです。',
  },
  rust: {
    path: '/article/rust',
    name: 'Rust',
    desc: 'Rustに関する技術記事です。',
  },
  typescript: {
    path: '/article/typescript',
    name: 'Typescript',
    desc: 'Typescriptに関する技術記事です。',
  },
} as const

/**
 * 第一階層はサイトでの区切りとしてパスを切る、それ以降はルール無し
 */
export const route = {
  root: rootRoute,
  article: articleRoute,
  // blogを追加する、profile, sitemapなど
  // hobyを追加する
}

type Route = typeof route
export type RouteKeys = keyof Route

// TODO: できればこれを書かないようにしたい
type RootRoute = typeof rootRoute
type RootRouteKeys = keyof RootRoute
type RootRouteVals = RootRoute[RootRouteKeys]
type BlogRoute = typeof articleRoute
type BlogRouteKeys = keyof BlogRoute
type BlogRouteVals = BlogRoute[BlogRouteKeys]

// TODO: 不要な場合は削除する
export type RoutePathFrags = RouteKeys | RootRouteKeys | BlogRouteKeys

type ExtractPath<T extends RouteUnit> = T['path']
export type AllPaths = ExtractPath<RootRouteVals | BlogRouteVals>
export const allPaths = routeUtil.getAllPaths()

export const allRoutes = routeUtil.getAllRoutes()
