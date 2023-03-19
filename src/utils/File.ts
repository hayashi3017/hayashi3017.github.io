import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PageInfo } from '@/type/page'

/**
 * 指定ディレクトリ配下の全ファイルを対象に、再帰的にその絶対パスを取得する.
 * @param dir 指定ディレクトリ.
 * @returns 絶対パスの配列.
 */
const listFileFullPaths = (dir: string): string[] => {
  if (dir === '') {
    throw Error('directory is not assigned.')
  }

  const fileList = fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile() ? [`${dir}/${dirent.name}`] : listFileFullPaths(`${dir}/${dirent.name}`),
    )
  return fileList
}

/**
 * TODO: ディレクトリ構成から動的にパスを取得する
 * 記事のページ情報を取得する
 * @param dir 
 * @returns 記事のページ情報
 */
const getPageInfo = (dir: string): PageInfo[] => {
  const targetDir = path.join(process.cwd(), `src/pages/${dir}`)
  const fileFullPaths = listFileFullPaths(targetDir).filter((fileFullPath) => {
    return /\.md/.test(fileFullPath)
  })
  return fileFullPaths.map((fileFullPath) => {
    const fileContents = fs.readFileSync(fileFullPath, 'utf-8')
    const matterResult = matter(fileContents)

    const path = fileFullPath
      .split('src/pages')
      .reverse()[0]
      .replace('[category]', matterResult.data.category)
      .replace('/posts', '')
      .replace(/\.md/, '')
    return {
      fileFullPath,
      category: matterResult.data.category,
      path,
    }
  })
}

export const File = {
  listFileFullPaths,
  getPageInfo
}
