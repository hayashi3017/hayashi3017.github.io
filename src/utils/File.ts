import fs from 'fs'

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

export const File = {
  listFileFullPaths,
}
