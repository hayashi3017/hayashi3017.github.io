import fs from 'fs'
import path from 'path'

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
 * マークダウンファイルの絶対パスを取得する.
 * ファイル名を指定しない場合は同階層の/posts配下の全ファイルを返す.
 * @param slug ファイル名.
 * @returns 
 */
const getPostsFileFullPath = (slug: string = '') => {
  // .next/serverという実行環境のディレクトリ構造文字列に依存しているため注意.
  const POSTS_DIR = __dirname.replace('.next/server', 'src') + '/posts'

  if (slug.length) {
    return path.join(POSTS_DIR, slug)
  }
  return listFileFullPaths(POSTS_DIR)
}

export const File = {
  listFileFullPaths,
  getPostsFileFullPath,
}
