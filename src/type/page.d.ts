export type Category = ''

export type Language = 'rust'

export type Library = ''

export type Technology = Language | Library

export type PageInfo = {
  fileFullPath: string
  category: string
  path: string
}

export type TechPageInfo = Record<Technology, PageInfo>

export type BlogPageInfo = Record<Category, PageInfo>
