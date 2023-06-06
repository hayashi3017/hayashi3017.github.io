import fs from 'fs'
import path from 'path'
import matter, { GrayMatterFile } from 'gray-matter'

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

async function readContent(slug: string[]): Promise<string> {
  // TODO: .next/serverというディレクトリ構成に依存しているので注意.
  const POSTS_DIR = __dirname.split('/.next/server')[0] + process.env.POSTS_DIR
  console.log('POSTS_DIR', POSTS_DIR)
  if (!slug) {
    return ''
  }
  const postPath = slug.join('/')
  const fullPath = path.join(POSTS_DIR as string, `${postPath}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  return fileContents
}

function getMatter(file: string): GrayMatterFile<string> | undefined {
  if (!file) {
    return undefined
  }
  return matter(file)
}

export const File = {
  listFileFullPaths,
  readContent,
  getMatter,
}
